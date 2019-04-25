import { Injectable } from '@angular/core';
import {AngularFireDatabase , AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

	todoList : AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase) { }

  getTodoList(){
  	this.todoList = this.firebasedb.list('titles');
  	return this.todoList;
  }

  addTodo(title:string){
  	this.getTodoList().push({
  		title: title,
  		isChecked:false 
  	})
  }
  updateTodo(id :string , flag : boolean ){
  	this.todoList.update(id , {isChecked : flag})
  }

  removeTodo(id){
  	this.todoList.remove(id);
  }
}
