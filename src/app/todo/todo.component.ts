import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo!:Todo
  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  deletetodo(todo:Todo){
    this.todoDelete.emit(todo);
  }
}
