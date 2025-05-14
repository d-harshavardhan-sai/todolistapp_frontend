import React,{useState} from 'react';
import axios from 'axios';
import { API_URL } from './data/apiPath';

const Create = () => {
    const [task, setTask] = useState();
    const handleAdd = () =>{
      axios.post(`${API_URL}add`, { task: task })
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
    } 
  return (
    <div className="create-section">
      <input type="text" placeholder="Enter todo" onChange={(e)=> setTask(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create;
