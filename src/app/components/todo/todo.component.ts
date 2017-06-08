import { Component, OnInit } from '@angular/core';
import { Todos } from '../../models/todo';
import { Tasks } from '../../models/task';
import { TodosService } from '../../services/todo.service';
import {
  RouterModule,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'todos',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodosService]
})
export class TodosComponent implements OnInit {

  newTodo: Todos = new Todos();
  taskId: number;

  constructor(
    private todosService: TodosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  addTodo() {
    this.newTodo.task_id = this.taskId;
    this.todosService.addTodo(this.newTodo);
    this.newTodo = new Todos();
  }

  toggleTodoComplete(todo) {
    this.todosService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todosService.deleteTodoById(todo.id);
  }

  getAllTodosByTaskId(): Todos[]{
    this.route.params
                .subscribe(params => {
                  this.taskId = +params.id;
               })
    return this.todosService.getAllTodosByTaskId(this.taskId);
  }

  markAllDone(){
    this.getAllTodosByTaskId()
                    .filter(v => !v.complete)
                    .map(v => this.toggleTodoComplete(v));
  }

  get todos() {
    return this.getAllTodosByTaskId()
                           .filter(v => !v.complete);
  }

  get dones() {
    return this.getAllTodosByTaskId()
                           .filter(v => v.complete);
  }

}
