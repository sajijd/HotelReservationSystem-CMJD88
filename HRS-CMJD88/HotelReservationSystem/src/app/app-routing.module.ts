import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthContextComponent} from "./components/auth-context/auth-context.component";
import {SigninFormComponent} from "./components/auth-context/inner-items/signin-form/signin-form.component";
import {SignupFormComponent} from "./components/auth-context/inner-items/signup-form/signup-form.component";
import {DashBoardComponent} from "./components/dash-board/dash-board.component";
import {GuestContextComponent} from "./components/dash-board/components/guest-context/guest-context.component";


const routes: Routes = [
  {path:'',redirectTo:'/auth/signin',pathMatch:'full'},
  {
    path:'auth',component:AuthContextComponent, children:[
      {path:'signin',component:SigninFormComponent} ,
      {path:'signup',component:SignupFormComponent}
    ]
  },
  {
    path:'dashboard',component:DashBoardComponent, children:[
      {path: '', redirectTo: '/dashboard/guest-management' ,pathMatch:'full'},
      {path: 'guest-management', component: GuestContextComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
