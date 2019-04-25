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
		.stateChanges().subscribe(
			a => {
				let x = a.payload.val() ;
				x['id'] = a.key;
				this.allTask.push(x);
				console.log(x);
			}
		)
      
		console.log(this.allTask);
	}

	addTodo(itemTitle){
		this.todoService.addTodo(itemTitle.value);
		itemTitle.value = null;
	}

}
