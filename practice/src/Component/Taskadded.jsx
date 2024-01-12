import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {addTask } from "../redux/action"

const Taskadded = () => {
    const dispatch = useDispatch();
  //  console.log(dispatch, "checking dispatch")

    const [add, setAdd] = useState('');

    const handleChange = (e) => {
       // console.log(e.target.value)
     setAdd(e.target.value)
    }

    const handleAdd = () => {
        if(add.trim() !== '') {
          //  console.log(dispatch(addTask(add)))
          console.log("added Task")
            dispatch(addTask(add))
            setAdd('')
        }
    }

  return (
    <div>
        <input  type='text'
        value={add}
        onChange={handleChange}/>
        <button onClick={handleAdd}>Submit</button>
    </div>
  )
}

export default Taskadded
