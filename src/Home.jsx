import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill, BsTrashFill } from 'react-icons/bs';
import { API_URL } from './data/apiPath';


const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    axios.get(`${API_URL}get`)
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
  }, [])

  const handleEdit = (id) => {
    axios.put(`${API_URL}update/${id}`)
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err))
  }

  const handleDelete = (id) => {
    axios.delete(`${API_URL}delete/${id}`)
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <Create />
      {
        todos.length === 0 ? (
          <div className="no-record"><h3>No Records</h3></div>
        ) : (
            todos.map((todo, index) => (
                <div className="todo-item" key={index}>
                  <div className="icon-wrapper left" onClick={()=> handleEdit(todo._id)}>
                    {todo.done ?
                      <BsFillCheckCircleFill className="icon status-icon"></BsFillCheckCircleFill> 
                      : <BsCircleFill className="icon status-icon" />
                    }
                    <p className={`todo-text ${todo.done ? "line_through" : ""}`}>{todo.task}</p>
                  </div>
                  <div className="icon-wrapper right">
                    <BsTrashFill className="icon delete-icon" onClick={() => handleDelete(todo._id)}/>
                  </div>
                </div>
              ))                          
        )
      }
    </div>
  );
};

export default Home;
