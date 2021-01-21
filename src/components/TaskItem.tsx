import React from 'react';
import CardTextOutlineIcon from "mdi-react/CardTextOutlineIcon";
import {Task} from '../models/task';
import { timeStamp } from '../utils/utils';
import { useTask } from '../context/taskContext';

import './TaskItem.css';

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const { updateTaskStatus } = useTask();

  const handleClickStart = async () => {
    await updateTaskStatus(task.id, 'progress');
  };

  const handleClickResolve = async () => {
    await updateTaskStatus(task.id, 'done');
  };

  return (
    <div className='task-item card mb-3'>
      <div className='card-body'>
        <div className='d-flex'>
          <div className='content d-flex flex-1'>
            <div className='mr-2 icon'>
              <CardTextOutlineIcon size={24} />
            </div>
            <div className="d-flex flex-column justify-content-between">
              <div className='name'>
                {task.name}
              </div>
              <div className='desc'>
                {
                  task.status === 'progress' &&
                  <div>{timeStamp(task.time)}</div>
                }
                {
                  task.status === 'done' &&
                  <div>${task.cost.toFixed(2)}</div>
                }
              </div>
            </div>
          </div>
          {
            (task.status === 'todo' || task.status === 'progress') &&
            <div className='actions'>
              {
                task.status === 'todo' &&
                <button className='btn btn-lg btn-primary' onClick={handleClickStart}>Start</button>
              }
              {
                task.status === 'progress' &&
                <button className='btn btn-lg btn-success' onClick={handleClickResolve}>Resolve</button>
              }
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
