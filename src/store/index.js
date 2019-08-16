// 创建store
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// 引入笔记本
import reducer from './reducer'

// 把笔记本reducer传给store，所以store也就知道仓库里有inputValue和list两个数据
const store = createStore(
    reducer,
    applyMiddleware([thunk, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()])
)
export default store