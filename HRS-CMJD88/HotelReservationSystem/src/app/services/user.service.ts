import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public signUp(
    name:string,email:string,contactNumber:string,password:string,retypePassword:string
  ):Observable<any>{
    return this.http.post('http://localhost:3001/api/v1/userRoute/register',{
      name,email,contactNumber,password,retypePassword
    });
  }
  public signin(
    email:string,password:string
  ):Observable<any>{
    return this.http.post('http://localhost:3001/api/v1/userRoute/signin',{
       headers:{email,password}
    });
  }




}
