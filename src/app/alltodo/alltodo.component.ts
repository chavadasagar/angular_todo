import { JsonPipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Todo } from '../todo';

@Component({
  selector: 'app-alltodo',
  templateUrl: './alltodo.component.html',
  styleUrls: ['./alltodo.component.css']
})
export class AlltodoComponent implements OnInit {
  todoitem!: string
  alltodo!: any
  constructor() {

    if(localStorage.getItem("alltodo") != undefined)
    {
     this.alltodo =   JSON.parse(localStorage.getItem("alltodo")!);
    }
  }

  ngOnInit(): void {
  }

  deletetodo(todo: Todo) {
    // this.alltodo = this.alltodo.filter((x: any) => x.no != todo.no)
    let index = this.alltodo.indexOf(todo);
    this.alltodo.splice(index, 1);

  }
}
