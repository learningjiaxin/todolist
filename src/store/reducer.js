import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_TODO_LIST } from './actionTypes'
//默认笔记本存储数据就是一个空对象
// store仓库里有两个默认数据，由reducer来管理
const defaultState = {
    inputValue: '',
    list: []
}

// 笔记本存储的所有数据
// reducer 可以接收state, 但是不能修改 state，这就是我们为什么接收到state后要去深拷备一个newState的原因
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        // 深拷备一个原来的state
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DEL_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    if (action.type === INIT_TODO_LIST) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }
    return state
}