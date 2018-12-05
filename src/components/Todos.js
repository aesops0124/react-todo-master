import React, { Component } from 'react'

export default class Todos extends Component {
  render() {
    const {todos} = this.props
    return (
      <div>
          {todos.map((todo, i) => {
          if(todo.status ==="completed"){
            return <li onClick={() => this.props.patchUpdate(todo)} style={{ textDecorationLine: 'line-through' }} key={i}>{todo.content}</li>
          }
          else
            return <li onClick={() => this.props.patchUpdate(todo)} key={i}>{todo.content}</li>
          })}
      </div>
    )
  }
}