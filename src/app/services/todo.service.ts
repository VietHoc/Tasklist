import { Injectable } from '@angular/core';
import { Todos } from '../models/todo';
import { Tasks } from '../models/task';

@Injectable()
export class TodosService {

    todos: Todos[] = [
    {id: 0, title:"Understand code", complete:false,task_id:0},
    {id: 1, title:"Learn Code", complete: false,task_id:0},
    {id: 2, title:"Recode", complete: false,task_id:0},
    {id: 3, title:"Copy code", complete:true,task_id:0},

    {id: 4, title:"Understand code", complete:false,task_id:1},
    {id: 5, title:"Learn Code", complete: false,task_id:1},
    {id: 6, title:"Recode", complete: false,task_id:1},
    {id: 7, title:"Copy code", complete:true,task_id:1},

    {id: 8, title:"Understand code", complete:false,task_id:2},
    {id: 9, title:"Learn Code", complete: false,task_id:2},
    {id: 10, title:"Recode", complete: false,task_id:2},
    {id: 11, title:"Copy code", complete:true,task_id:2},
  ];

  lastId: number = this.todos.length - 1;

  constructor() { }

  // Simulate POST /todos
  addTodo(todo: Todos): TodosService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodosService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todos {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }
  // Simulate GET /tasks
  getAllTodosByTaskId(taskId: number): Todos[] {
    return this.todos
                  .filter(todo => todo.task_id === taskId);
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todos {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todos){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
