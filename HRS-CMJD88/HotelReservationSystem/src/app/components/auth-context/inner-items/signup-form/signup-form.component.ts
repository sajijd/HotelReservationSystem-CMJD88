import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  signupForm=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    contactNumber:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required),
    retypePassword:new FormControl('',Validators.required),
  })

  constructor(private _service: UserService) { }

  ngOnInit(): void {
  }
  signUp(){
    this._service.signUp(
      this.signupForm.get('name')?.value,
      this.signupForm.get('email')?.value,
      this.signupForm.get('contactNumber')?.value,
      this.signupForm.get('password')?.value,
      this.signupForm.get('retypePassword')?.value
    ).subscribe(response=>{
      alert('Success..')
      console.log(response)
    },error =>{
      console.log(error)
    })
  }

}
