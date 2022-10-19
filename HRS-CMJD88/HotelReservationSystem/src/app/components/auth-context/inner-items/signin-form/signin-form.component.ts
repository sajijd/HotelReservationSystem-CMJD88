import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {Router, RouterPreloader} from "@angular/router";

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {

  signinForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
  })

  constructor(private router:Router , private  _service: UserService) { }

  ngOnInit(): void {
  }
  signin(){
    this._service.signin(
      this.signinForm.get('email')?.value,
      this.signinForm.get('password')?.value,
    ).subscribe(response=>{
      alert('Success..')
      this.router.navigateByUrl('/dashboard').catch();
      console.log(response)
    },error =>{
      console.log(error)
    })
  }
}
