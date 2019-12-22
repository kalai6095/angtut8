import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddpageComponent } from './server/addpage/addpage.component';


const routes: Routes = [
  {path:'server',component:AddpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
