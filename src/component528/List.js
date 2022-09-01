import React, { Component } from 'react'
import Item from './Item'

export default class List extends Component {
  render() {
      const {todos} = this.props
      //const deleteTodo = this.props
    return (
      <div>
          {todos.map((todoObj)=>{
              return  <Item {...todoObj} deleteTodo={this.props.deleteTodo} handleChecked={this.props.handleChecked}/>
          })}
          
      </div>
    )
  }
}
