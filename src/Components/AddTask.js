import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTask } from '../JS/Reducers/taskSlice'

function AddTask() {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    if (description) {
      const newTask = { id: nanoid(), description, isDone: false };
      dispatch(addTask(newTask));
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
