import React from 'react'
import { Input, Button, List } from 'antd'
const ToDoListUI = (props) => (
    <div style={{ 'margin': '10px 0 ' }}>
        <div>
            <Input placeholder="TodoInfo" value={props.inputValue} style={{ 'width': '300px', 'marginRight': '10px' }} onChange={props.handleInputChange} />
            <Button type="primary" onClick={props.handleButtonClick}>提交</Button>
        </div>
        <List
            bordered
            dataSource={props.list}
            renderItem={(item, index) => <List.Item onClick={() => props.handleItemDel(index)}>{item}</List.Item>}
        />
    </div>
)
// class ToDoListUI extends Component {
//     render() {
//         return (
//             <div style={{ 'margin': '10px 0 ' }}>
//                 <div>
//                     <Input placeholder="TodoInfo" value={this.props.inputValue} style={{ 'width': '300px', 'marginRight': '10px' }} onChange={this.props.handleInputChange} />
//                     <Button type="primary" onClick={this.props.handleButtonClick}>提交</Button>
//                 </div>
//                 <List
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => <List.Item onClick={(index) => this.props.handleItemDel(index)}>{item}</List.Item>}
//                 />
//             </div>
//         )
//     }
// }
export default ToDoListUI