import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  @Output() addnewtodo: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addtodo(todo: any) {

    debugger
    let temptodo = new Todo();
    temptodo.name = todo.value.todoname
    temptodo.descrption = todo.value.descrption;
    temptodo.isactive = true;

    let all:any

    if(localStorage.getItem("alltodo") != undefined)
    {
      all = JSON.parse(localStorage.getItem("alltodo")!);
    }
    else{
      all = [];
    }

    all.push(temptodo);
    localStorage.setItem("alltodo",JSON.stringify(all));
  }

}
