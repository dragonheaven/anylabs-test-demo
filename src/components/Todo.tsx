import React, { useState } from 'react';
import { useTask } from '../context/taskContext';
import TaskItem from './TaskItem';
import TaskModal from './TaskModal';

import './Todo.css';

const Todo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { filterTasks } = useTask();

  const tasks = filterTasks('todo');

  const handleNewButtonClick = () => {
    setIsOpen(true);
  };

  return (
    <div className='card big h-100'>
      <div className='card-header'>
        <div className='d-flex pt-2'>
          <div className='count'><span>{tasks.length}</span></div>
          <h3>Todo</h3>
        </div>
      </div>
      <div className='card-body'>
        <div className='mb-8'>
          {
            tasks.map((item, index) => <TaskItem key={index} task={item} />)
          }
        </div>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-new' onClick={handleNewButtonClick}>
            <i className='fa fa-plus mr-2' />New task</button>
        </div>
      </div>
      <TaskModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Todo;
