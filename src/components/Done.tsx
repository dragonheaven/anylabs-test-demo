import React from 'react';
import TaskItem from './TaskItem';
import { useTask } from '../context/taskContext';

const Done = () => {
  const { filterTasks } = useTask();

  const tasks = filterTasks('done');

  return (
    <div className='card big h-100'>
      <div className='card-header'>
        <div className='d-flex pt-2'>
          <div className='count'><span>{tasks.length}</span></div>
          <h3>Done</h3>
        </div>
      </div>
      <div className='card-body'>
        {
          tasks.map((item, index) => <TaskItem key={index} task={item} />)
        }
      </div>
    </div>
  );
};

export default Done;
