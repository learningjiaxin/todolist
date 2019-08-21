import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeInputValue, addItem } from './store/actionCreator'
class TodoList extends Component {
    constructor(props) {
        super(props)
    }
    handleIn
    render() {
        console.log('object', this.props.list)
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.changeInputValue} />
                    <button onClick={this.props.handleClick}>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return <li key={index} onClick={this.props.handleDel}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
// 把store里的数据映身给这个组件，变成这个组件的props，这里的state就是store里的数据
const mapStateToProps = (state) => {
    console.log(state, 'statatat')
    return {
        // store里边的inputValue会映身到组件的props的inputValue里边
        // 所以当组件获取inputValue里不能用this.state.inputValue,而是用this.props.inputValue
        inputValue: state.inputValue,
        list: state.list
    }
}
//这里dispatch就等同于store.dispatch，把store的dispatch方法挂载到props上
// 想要改变store的内容就要调用store.dispatch方法，store.dispatch被映射到了props上
// 这样就可以通过this.props.什么东西去调用store.dispatch方法
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = changeInputValue(e.target.value)
            dispatch(action)
        },
        handleClick() {
            const action = addItem()
            dispatch(action)
        },
        handleDel() {
            
        }
    }
}
// 让TodoList和store进行连接
// mapStateToProps
// 怎么让TodoList和store做连接呢？
// 连接有一个映身关系，store里边的公用数据会映射到这个组件的props里边，
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)