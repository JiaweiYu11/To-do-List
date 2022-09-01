import React, { Component } from 'react'
import '../inde.css'

export default class Footer extends Component {

    handleCheckAll=(event)=>{
        this.props.handleCheckAll(event.target.checked)
    }
    deleteAllDone=()=>{
        this.props.deleteAllDone()
    }
  render() {

    const numOfFinished = this.props.todos.reduce((pre,curr)=>{
        return pre + (curr.done ? 1:0)
    },0)
    return (
      <div>
          <input type='checkbox' onChange={this.handleCheckAll} checked={numOfFinished === this.props.todos.length && numOfFinished !== 0 ? true:false}></input>
          {numOfFinished}FInished / All {this.props.todos.length}
          <button className='foot-btn' onClick={this.deleteAllDone}>Delte All Done</button>
      </div>
    )
  }
}
