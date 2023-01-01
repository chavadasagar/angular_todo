import { JsonPipe } from '@angular/common';
import { Component, OnInit , Input} from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-alltodo',
  templateUrl: './alltodo.component.html',
  styleUrls: ['./alltodo.component.css']
})
export class AlltodoComponent implements OnInit {
  todoitem!:any
  alltodo!: Todo[];
  constructor() {

    debugger

      if(localStorage.getItem("todo") == undefined)
      {
        this.alltodo = [];
      }
      else{
        this.todoitem = localStorage.getItem("todo");
        this.alltodo.push(JSON.parse(this.todoitem));
      }

    // this.alltodo = [
    //   {
    //     name:"new",
    //     descrption:"it is simple todo",
    //     isactive:true,
    //     no:1
    //   },
    //   {
    //     name:"working",
    //     descrption:"it is simple todo",
    //     isactive:true,
    //     no:10
    //   },
    //   {
    //     name:"lunch",
    //     descrption:"it is simple todo",
    //     isactive:true,
    //     no:12
    //   }
    // ]
   }

  ngOnInit(): void {
  }

  deletetodo(todo:Todo){
    debugger
    // this.alltodo = this.alltodo.filter((x: any) => x.no != todo.no)
    let index = this.alltodo.indexOf(todo);
    this.alltodo.splice(index);
  }

 
  

  

}
