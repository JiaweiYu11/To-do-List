import React, { Component } from 'react'
import Header from './component528/Header'
import List from './component528/List'
import Footer from './component528/Footer'
import './inde.css'

export default class App extends Component {

    

    state = {
        todos:[
            {id:1,mission:'coding',done:true},
            {id:2,mission:'eating',done:true},
            {id:3,mission:'sleeping',done:false}
        ]
    }
    deleteTodo=(id)=>{
        const newTodos = this.state.todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        this.setState({todos:newTodos})
    }
    handleChecked=(id,done)=>{
        const newTodos = this.state.todos.map((todoObj)=>{
            if(todoObj.id === id)
            return {...todoObj,done}
            else
            return todoObj
        })
        this.setState({todos:newTodos})
    }
    addTodo=(addMission)=>{
        this.setState({todos:[addMission,...this.state.todos]})
    }
    handleCheckAll=(done)=>{
        const newTodos = this.state.todos.map((todoObj)=>{
            return {...todoObj,done}
        })
        this.setState({todos:newTodos})
    }
    deleteAllDone=()=>{
        const newTodos = this.state.todos.filter((todoObj)=>{
            return todoObj.done === false
        })
        this.setState({todos:newTodos})
    }
        render() {
        /* const {todos} = this.state */
        const {todos} = this.state
        return (
            <div className='outer'>
                <div className='outer1'>
                    <div className='header'>
                    <div className='header-title'>
                        <span className='title-span'>TO DO LIST DEMO</span>
                    </div>
                    <Header addTodo={this.addTodo}/>
                    </div>
                    <div className='list'>
                    <List todos={todos} deleteTodo={this.deleteTodo} handleChecked={this.handleChecked}/>
                    </div>
                    <div className='footer'>
                    <Footer todos={todos} handleCheckAll={this.handleCheckAll} deleteAllDone={this.deleteAllDone}/>
                    </div>
                </div>
                
            </div>
        )
    }
}
