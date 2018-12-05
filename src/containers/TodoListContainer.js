import { connect } from 'react-redux'
import TodoList from '../components/TodoList';

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  patchTodo: todo => {
    let newStatus
    if (todo.status==="completed"){
      newStatus = "active"
    }else{
      newStatus = "completed"
    }
    fetch("http://localhost:8080/api/todos/" +todo.id, {
        mode: 'cors',
        method: 'PUT', 
        body: JSON.stringify({
          "content": todo.content,
          "status" : newStatus,
          "id": todo.id
        }),
        headers: new Headers({ 'Content-Type': 'application/json'})
      })
      .then(res=>res.json())
      .then(res => dispatch({
        type: "UPDATE_ONE_TODO",
        payload: {
            id:res.id, 
            status:res.status, 
            content:res.content
        }
      }))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(TodoList) 