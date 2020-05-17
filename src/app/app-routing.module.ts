import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VisitorComponent } from './visitor/visitor.component';


const routes: Routes = [  {
    path: '',
    component: HomeComponent,
}, {
    path: 'visitor',
    component: VisitorComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
