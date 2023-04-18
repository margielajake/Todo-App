import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask } from '../JS/Reducers/taskSlice';

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEditSubmit = event => {
    event.preventDefault();
    if (description) {
      dispatch(editTask({ ...task, description }));
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <li>
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
          <button type="submit">Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      </li>
    );
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <span>{task.description}</span>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </li>
  );
}

export default Task;
