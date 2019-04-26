import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

	allTask: any[];

	constructor(private todoService: TodoService) { }


	ngOnInit() {


		this.allTask = [];
		this.todoService.getTodoList()
		.snapshotChanges()
  	.subscribe(item => {
  		this.allTask = [];
  		item.forEach(element =>{
  			let x =	element.payload.val();
  			x['id'] = element.key;
  			this.allTask.push(x);
  		});
  	});
      
		console.log(this.allTask);
	}

	addTodo(itemTitle){
		this.todoService.addTodo(itemTitle.value);
		itemTitle.value = null;
	}

	updateTodo(id,checked){
		this.todoService.updateTodo(id , !checked);
	}

	removeTask(id){
		if (confirm('Seguro que quieres eliminarlo?')) {
			this.todoService.removeTodo(id);
		}
	}
}
