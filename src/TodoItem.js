import React, { Component } from 'react'

export default class TodoItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div onClick={this.props.handleDel}>
                {this.props.list}
            </div>
        )
    }
}
