import { useSelector } from 'react-redux';
import { useState } from 'react';
import Task from './Task';

function ListTask() {
  const [filter, setFilter] = useState('all');
  const tasks = useSelector(state => state.tasks.tasks);

  const filteredTasks = filter === 'done'
    ? tasks.filter(task => task.isDone) : filter === 'not-done'
    ? tasks.filter(task => !task.isDone) : tasks;

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('not-done')}>Not Done</button>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default ListTask;
