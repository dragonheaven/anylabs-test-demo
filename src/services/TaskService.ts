import { Task } from '../models/task';
import data  from '../data/data.json';

const tasks: Task[] = data as any;

const hourlyRate = 10;

export async function createTask(data) {
  const task = {
    id: tasks.length + 1,
    name: data.name,
    status: "todo",
    time: 0,
    cost: 0
  };

  tasks.push(task);

  return task;
}

export async function fetchTasks(status?: string) {
  if (!status) return tasks;

  return tasks.filter(item => item.status === status);
}

export async function setTaskStatus(id: number, status: string) {
  const task = tasks.find(item => item.id === id);

  if (task) {
    task.status = status;

    if (status === "progress") {
      task.time = 0;
    }

    if (status === "done") {
      task.cost = hourlyRate * task.time / 3600;
    }
  }

  return task;
}

export async function updateProgressTasksTime() {
  tasks.forEach(item => {
    if (item.status === "progress") {
      item.time ++;
    }
  });

  return tasks;
}
