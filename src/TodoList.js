import React, { Component } from 'react'
import TodiItem from './TodoItem'
import axios from 'axios'

export default class TodoList extends Component {
    state = {
        inputValue: '',
        list: []
    }
    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleClick = () => {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleDel = (i) => {
        const list = [...this.state.list]
        list.splice(i, 1)
        this.setState({
            list
        })
    }
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        axios.get('/api/todolist')
            .then((res) => {
                this.setState(() => {
                    return { list: [...res.data] }
                })
            }).catch(() => {
                alert('error')
            })
    }
    render() {
        return (
            <div>
                <input value={this.state.inputValue} onChange={this.handleChange.bind(this)} />
                <button onClick={this.handleClick.bind(this)}>提交</button>
                <div>
                    {
                        this.state.list.map((item, i) => {
                            return <TodiItem key={i} list={item} handleDel={this.handleDel.bind(this, i)} />
                        })
                    }
                </div>
            </div>
        )
    }
}
