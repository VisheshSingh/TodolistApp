import { Injectable } from '@angular/core';
import {Init} from '../init-todos';
@Injectable()
export class TodoService extends Init {

  constructor() {
    super();
    console.log('Todos initialized');
    this.load();
  }

  getTodos(){
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  addTask(newTask){
    var todos = JSON.parse(localStorage.getItem('todos'));
    //Add New Task
    todos.push(newTask);
    //Set New Task
    localStorage.setItem('todos',JSON.stringify(todos));
  }

  deleteTask(todoText){
    var todos = JSON.parse(localStorage.getItem('todos'));
    for(var i=0; i< todos.length;i++){
      if(todos[i].text == todoText){
        todos.splice(i,1);
      }
    }
    //Set New Task
    localStorage.setItem('todos',JSON.stringify(todos));
  }

  updateTask(oldText, newText){
    var todos = JSON.parse(localStorage.getItem('todos'));
    for(var i=0; i< todos.length;i++){
      if(todos[i].text == oldText){
        todos[i].text = newText;
      }
    }
    //Set New Task
    localStorage.setItem('todos',JSON.stringify(todos));
  }

}
