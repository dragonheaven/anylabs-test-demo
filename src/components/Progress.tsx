import React, {useEffect} from 'react';
import { useTask } from '../context/taskContext';
import TaskItem from './TaskItem';

const Progress = () => {
  const { filterTasks, updateProgressTasksTime } = useTask();

  const tasks = filterTasks('progress');

  useEffect(() => {
    setInterval(() => {
      updateProgressTasksTime();
    }, 1000);
  }, []);

  return (
    <div className='card big h-100'>
      <div className='card-header'>
        <div className='d-flex pt-2'>
          <div className='count'><span>{tasks.length}</span></div>
          <h3>In progress</h3>
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

export default Progress;
