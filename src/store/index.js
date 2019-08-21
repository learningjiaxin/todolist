// 创建store
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
// 引入笔记本
import reducer from './reducer'
import toDoSagas from './sagas'
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
)
// 把笔记本reducer传给store，所以store也就知道仓库里有inputValue和list两个数据
const store = createStore(
    reducer,
    enhancer
)
sagaMiddleware.run(toDoSagas)
export default store