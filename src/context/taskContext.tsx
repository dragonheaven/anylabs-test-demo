import React, {useEffect, useState} from "react";
import * as TaskService from "../services/TaskService";
import { Task } from "../models/task";

const TaskContext = React.createContext({} as any);

function TaskProvider(props: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setIsLoading(true);

    TaskService.fetchTasks().then(tasks => {
      setTasks(tasks);
      setIsLoading(false);
    });
  }, []);

  async function fetchTasks() {
    setIsLoading(true);

    const tasks = await TaskService.fetchTasks();

    setTasks(tasks);
    setIsLoading(false);
  }

  async function createTask(name: string) {
    setIsCreating(true);
    await TaskService.createTask({ name });
    setIsCreating(false);

    await fetchTasks();
  }

  async function updateTaskStatus(id: number, status: string) {
    setIsLoading(true);
    await TaskService.setTaskStatus(id, status);
    setIsUpdating(false);

    await fetchTasks();
  }

  async function updateProgressTasksTime() {
    const tasks = await TaskService.updateProgressTasksTime();

    setTasks([...tasks]);
  }

  function filterTasks(status?: string) {
    return tasks.filter(item => item.status === status);
  }

  return <TaskContext.Provider value={{ tasks, fetchTasks, isLoading, isCreating, isUpdating, filterTasks, createTask, updateTaskStatus, updateProgressTasksTime }} {...props} />;
}

function useTask() {
  const context = React.useContext(TaskContext);
  if (context === undefined) {
    throw new Error(`useTask must be used within a TaskProvider`);
  }
  return context;
}

export { TaskProvider, useTask };
