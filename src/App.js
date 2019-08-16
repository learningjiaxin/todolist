import React, { Component } from 'react'
import 'antd/dist/antd.css'
import axios from 'axios'
// 引入仓库
import store from './store'
import { getInputChangeAction, getAddItemAction, getDelItemAction, initListAction } from './store/actionCreators'
import ToDoListUI from './ToDoListUI'
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleItemDel = this.handleItemDel.bind(this)
        //订阅store的改变
        store.subscribe(this.handleStoreChange)
    }
    componentDidMount() {
        axios.get('/api/todolist').then((res) => {
            const data = res.data
            const action = initListAction(data)
            console.log(action, 'actionaction')
            store.dispatch(action)
        })
    }
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        // 调用dispatch 把action传递给store
        store.dispatch(action)
    }
    handleStoreChange = () => {
        // 当store里的值发生改变的时候就需要从store里重新取一遍数据
        // 然后调用setState替换掉当前组件里的数据
        this.setState(store.getState())
    }
    handleButtonClick = () => {
        const action = getAddItemAction()
        store.dispatch(action)
    }
    handleItemDel = (index) => {
        const action = getDelItemAction(index)
        store.dispatch(action)
    }
    render() {
        return <ToDoListUI
            inputValue={this.state.inputValue}
            list={this.state.list}
            handleInputChange={this.handleInputChange}
            handleButtonClick={this.handleButtonClick}
            handleItemDel={this.handleItemDel}
        />
    }
}
