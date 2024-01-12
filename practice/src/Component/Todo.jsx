import React, {useEffect} from 'react';
import {addTask,updateTask,fetchTask,deleteTask} from "../redux/action";

import {useDispatch, useSelector} from "react-redux"



const Todo = () => {
    const dispatch = useDispatch();
    const task = useSelector((state) => state);
    console.log(task,"coming")

    useEffect(() => {
        dispatch(fetchTask())
    },[dispatch])

    
    
  return (
    <div>
      <h1>Fetching Todos</h1>
      {task.map((item,id) => <div key={id}>
        <p>{item.title}</p>
        </div>)}
    </div>
  )
}

export default Todo
