import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_TODO_LIST } from './actionTypes'
import axios from 'axios'
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})
export const getDelItemAction = (index) => ({
    type: DEL_TODO_ITEM,
    index
})
export const initListAction = (data) => ({
    type: INIT_TODO_LIST,
    data
})

// redux-thunk
export const getToDoList = () => {
    return (dispatch) => {
        // 获取数据
        axios.get('/api/todolist').then((res) => {
            const data = res.data
            // 改变store数据，重新走一遍redux流程
            // 这里的action是一个对象
            const action = initListAction(data)
            // 调用store.dispatch这个方法，返回的函数自动会接收到store.dispatch这个方法，所以这里可以直接调用dispatch方法
            dispatch(action)
        })
    }
}