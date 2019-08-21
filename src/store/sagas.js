import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import axios from 'axios'
import { initListAction } from './actionCreators'
function* getInitList() {
    try {
        // 这个方法是一个Generator函数，它会先去取数据
        const res = yield axios.get('/api/todolist')
        // 把数据结果再创建一个action派发给store
        const action = initListAction(res.data)
        // 这个action 给到 store 之后，store会给reducer，reducer会判断
        yield put(action)
    } catch (error) {
        console.error('请求失败')
    }
}
function* mySaga() {
    // 当我接收到action类型为 GET_INIT_LIST 这个action的类型的时候
    // 我会执行 getInitList 这个方法，这个方法是一个Generator函数
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;