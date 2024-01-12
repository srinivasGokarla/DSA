import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTask,updateTask,fetchTask,deleteTask} from "../redux/action";

const TaskUpdateForm = ({ taskId, currentTitle, onUpdate }) => {
  const dispatch = useDispatch();
  const [updatedTitle, setUpdatedTitle] = useState(currentTitle);

  const handleTitleChange = (event) => {
    setUpdatedTitle(event.target.value);
  };

  const handleUpdateTask = () => {
    if (updatedTitle.trim() !== '') {
      dispatch(updateTask(taskId, { title: updatedTitle }));
      onUpdate();
    }
  };

  return (
    <div>
      <h2>Update Task</h2>
      <input
        type="text"
        value={updatedTitle}
        onChange={handleTitleChange}
      />
      <button onClick={handleUpdateTask}>Update Task</button>
    </div>
  );
};

export default TaskUpdateForm;
