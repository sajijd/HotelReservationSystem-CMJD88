import { Injectable } from '@angular/core';
import GuestDTO from "../dto/GuestDTO";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http:HttpClient) { }

  public GuestReservation(dto: GuestDTO):Observable<any>{
    return this.http.post('http://localhost:3001/api/v1/GuestReservationRoute',{
      name:dto.name,email:dto.email,contactNumber:dto.contactNumber,
      checkInDate:dto.checkInDate,checkOutDate:dto.checkOutDate,
      roomNumber:dto.roomNumber,special:dto.special
    })
  }
}
