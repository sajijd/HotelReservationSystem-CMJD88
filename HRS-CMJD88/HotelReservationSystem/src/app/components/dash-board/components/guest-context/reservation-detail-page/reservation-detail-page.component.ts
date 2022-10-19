import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from "@angular/forms";
import {GuestService} from "../../../../../services/guest.service";
import GuestDTO from "../../../../../dto/GuestDTO";



@Component({
  selector: 'app-reservation-detail-page',
  templateUrl: './reservation-detail-page.component.html',
  styleUrls: ['./reservation-detail-page.component.scss']
})
export class ReservationDetailPageComponent implements OnInit {
   GuestReservationForm=new FormGroup({
    name:new FormControl('',[
      Validators.required,Validators.minLength(3),Validators.maxLength(15)
    ]),
    email:new FormControl('',[
      Validators.required,Validators.minLength(3)
    ]),
    contactNumber:new FormControl('',[
      Validators.required,
    ]),
    checkInDate:new FormControl('',[
      Validators.required
    ]),
    checkOutDate:new FormControl('',[
      Validators.required
    ]),
    roomNumber:new FormControl('',[
      Validators.required
    ]),
    special:new FormControl('',[
      Validators.required
    ])
  })


  constructor(private _guestService: GuestService) { }

  ngOnInit(): void {
  }
  uploadData(){
    const dto=new GuestDTO(
      this.GuestReservationForm.get('name')?.value,
      this.GuestReservationForm.get('email')?.value,
      Number(this.GuestReservationForm.get('contactNumber')?.value),
      this.GuestReservationForm.get('checkInDate')?.value,
      this.GuestReservationForm.get('checkOutDate')?.value,
      this.GuestReservationForm.get('roomNumber')?.value,
      this.GuestReservationForm.get('special')?.value
    );
      this._guestService.GuestReservation(dto).subscribe(response=>{
        alert('Saved..');
        this.GuestReservationForm.reset();
      },error=>{
        console.log(error)
        })
  }

}
