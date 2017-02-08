import { createStore } from 'redux';

// カウントアップ/ダウンの実装
//
// このアプリケーションの実行結果
// $ npm run build
// $ node dist/app.js
// { counter: 1 }
// { counter: 2 }
// { counter: 1 }
//
// アプリケーションの流れ
// ① 状態遷移を起こしたい時はAction Creatorをdispatchする
// ② StoreがActionを受け取り、Reducerを使いActionの種類に応じて内部状態を遷移させる
// ③ それがStoreに保持されて出力される


// Action Creators (Actionを発行する関数群)
function incrementCounter() {
	// Actionの実態(ただのオブジェクト)
	// ActionはActionの種類を表すtypeを持つ
	return { type: 'INCREMENT_COUNTER' }
}
function decrementCounter() {
	return { type: 'DECREMENT_COUNTER' }
}

// Reducer
// Reducerは状態を遷移させる関数
// 副作用を持たない関数として実装する
function counter(state = {counter: 0}, action) {
	switch (action.type) {
		case 'INCREMENT_COUNTER':
			return {counter: state.counter + 1}
	    case 'DECREMENT_COUNTER':
			return {counter: state.counter - 1}
	    default:
			return state
	}
}

// store
// storeは状態を保持するオブジェクト
const store = createStore(counter)

// StoreにはsubscribeというAPIがある
// これを使うと状態が更新するたびにコンソールに出力がされる
store.subscribe(() => console.log(store.getState()))

// Actionを発行
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
