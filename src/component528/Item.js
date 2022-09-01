import React, { Component } from 'react'
import '../inde.css'

export default class Item extends Component {
    state = {
        style:{
            width:450,
            background:'white'
        },
        btn:{
            display:'none'
        }
    }
    handleEnter=()=>{
        this.setState({style:{width:450,background:'#ddd'}})
        this.setState({btn:{display:''}})
    }
    handleLeave=()=>{
        this.setState({style:{width:450,background:'white'}})
        this.setState({btn:{display:'none'}})
    }
    deleteTodo=(id)=>{
        return(event)=>{
            if(window.confirm('Confirm to delete'))
            this.props.deleteTodo(id,event.target.value)
        }
    }
    handleChecked=(id)=>{
        return(event)=>{
            console.log(id,event.target.checked)
            this.props.handleChecked(id,event.target.checked)
        }
    }
  render() {
      const {id} = this.props
    return (
      <div>
          <li className='item-li' style={this.state.style} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
          <input type='checkbox' onChange={this.handleChecked(id)} checked={this.props.done}></input>
          <span>{this.props.mission}</span>
          <button className='list-btn' style={this.state.btn} onClick={this.deleteTodo(id)}>Delete</button>
          </li>
      </div>
    )
  }
}
