import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  appState = 'default';
  oldText;
  constructor(private TS: TodoService) { }

  ngOnInit() {
    this.todos = this.TS.getTodos();
  }

  addTask(){
    var newTask = {
      text:this.text
    }
    this.todos.push(newTask);
    this.TS.addTask(newTask);
  }

  deleteTask(todoText){
    for(var i=0; i< this.todos.length;i++){
      if(this.todos[i].text == todoText){
        this.todos.splice(i,1);
      }
    }
    this.TS.deleteTask(todoText);
  }

  editTask(todo){
    this.appState = 'edit';
    this.oldText = todo.text;
    this.text = todo.text;

  }
  updateTask(){
    for(var i=0; i< this.todos.length;i++){
      if(this.todos[i].text == this.oldText){
        this.todos[i].text = this.text;
      }
    }

    this.TS.updateTask(this.oldText, this.text);
  }

}
