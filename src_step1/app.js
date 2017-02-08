import { createStore } from 'redux';

// このアプリケーションの流れ
// ① 状態がReducerを通って初期状態{counter: 0}に遷移する
// ② 状態がStoreに保持される
// ③ store.getStateに状態が取得され出力される
//
// $ npm run buil
// $ node dist/app.js
// { counter: 0 }

// reducer
// reducerは状態を遷移させる関数
function counter(state = {counter: 0}, action) {
	return state
}

// store
// storeは状態を保持するオブジェクト
const store = createStore(counter)

// getStateはその時点でStoreが保持している内部状態オブジェクトを取得できる
console.log(store.getState())
