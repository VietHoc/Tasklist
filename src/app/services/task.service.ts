import { Injectable } from '@angular/core';
import { Tasks } from '../models/task';
import { Todos } from '../models/todo';

@Injectable()
export class TaskService {

  task: Tasks[] = [
    {id: 0, title:"Step 1"},
    {id: 1, title:"Step 2"},
    {id: 2, title:"Step 3"},
    {id: 3, title:"Step 4"},
  ];  

  lastId: number = this.task.length - 1;

  constructor() { }

  // Simulate POST /tasks
  addTask(task: Tasks): TaskService {
    if (!task.id) {
      task.id = ++this.lastId;
    }
    this.task.push(task);
    return this;
  }

  // Simulate DELETE /tasks/:id
  deleteTaskById(id: number): TaskService {
    this.task = this.task
      .filter(task => task.id !== id);
    return this;
  }
  getTasks():Tasks[]{
    return this.task;
  }
  // Simulate PUT /tasks/:id
  editTask(Tasks: Tasks, text: string){
    this.task.find(Task => Task.id === Tasks.id).title = text;
  }

}
