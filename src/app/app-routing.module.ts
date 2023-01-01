import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { AlltodoComponent } from './alltodo/alltodo.component';

const routes: Routes = [
  {path:"addtodo",component:AddtodoComponent},
  {path:"alltodo",component:AlltodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
