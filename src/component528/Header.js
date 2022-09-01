import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import '../inde.css'

export default class Header extends Component {

    addTodo=(event)=>{
        console.log(event.target.value)
        if(event.key !== 'Enter') return
        else this.props.addTodo({id:nanoid(),mission:event.target.value,done:false})
    }
  render() {
    return (
      <div>
          <input onKeyUp={this.addTodo} placeholder='Add new mission here...'>
            </input><span className='notice'>Click Enter to Add Task</span>
          
      </div>
    )
  }
}
