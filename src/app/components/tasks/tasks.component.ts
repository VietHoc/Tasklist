import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, CanDeactivate } from '@angular/router';

import { Tasks } from "../../models/task";
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TaskService]
})
export class TasksComponent implements OnInit {

  newTask: Tasks = new Tasks();
  form: FormGroup;
  error: any;
  taskEdit = -1;
  loading = true;
  Tasks : Tasks[];

  constructor(
    private router: Router,
    private taskService: TaskService,
    fb: FormBuilder
  ) { 
    this.form =  fb.group({
      newTaskTitle:['',
        Validators.compose([
          Validators.required
          ])
        ]
    })
  }
  ngOnInit() {
    this.getTasks();
  }

  addTask() {
    this.taskService.addTask(this.newTask);
    this.getTasks();
    this.newTask = new Tasks();
  }
  removeTask(Task: Tasks, event: Event) {
    event.stopPropagation();
    this.taskService.deleteTaskById(Task.id);
    this.getTasks();
  }

  getTasks() {
    this.Tasks = this.taskService.getTasks();
  }

  goTodo(id: number){
    this.router.navigate(['tasks',id]);
  }

  changeToEdit(Task: Tasks, event: any){
    event.stopPropagation();
    this.taskEdit = Task.id;
  }

  editTask(text: string, Task: Tasks, event: any){
    event.stopPropagation();
    this.taskService.editTask(Task, text);
    this.revertEdit();
    this.getTasks();
  }
  revertEdit(){
    this.taskEdit=-1;
  }  
}
