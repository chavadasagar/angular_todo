import { JsonPipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-alltodo',
  templateUrl: './alltodo.component.html',
  styleUrls: ['./alltodo.component.css']
})
export class AlltodoComponent implements OnInit {
  todoitem!: string
  alltodo!: Todo[];
  constructor() {

    debugger

    this.todoitem = JSON.stringify(localStorage.getItem("todo")); 
    if(this.todoitem == null)
    {
      this.alltodo = [];
    }
    else{
      this.alltodo.push(JSON.parse(JSON.parse(this.todoitem)) as Todo);
    }




    this.alltodo = [
      {
        name:"new",
        descrption:"it is simple todo",
        isactive:true,
      },
      {
        name:"working",
        descrption:"it is simple todo",
        isactive:true,
      },
      {
        name:"lunch",
        descrption:"it is simple todo",
        isactive:true,
      }
    ]
  }

  ngOnInit(): void {
  }

  deletetodo(todo: Todo) {
    // this.alltodo = this.alltodo.filter((x: any) => x.no != todo.no)
    let index = this.alltodo.indexOf(todo);
    this.alltodo.splice(index,1);
  }
}
