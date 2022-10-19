export default class GuestDTO{
  public name:string;
  public email:string;
  public contactNumber:number;
  public checkInDate:string;
  public checkOutDate:string;
  public roomNumber:string;
  public special:string;


  constructor(name:string, email:string, contactNumber:number, checkInDate:string,
  checkOutDate:string, roomNumber:string, special:string){

  this.name = name;
  this.email=email;
  this.contactNumber=contactNumber;
  this.checkInDate=checkInDate;
  this.checkOutDate=checkOutDate;
  this.roomNumber=roomNumber;
  this.special=special;
  }
}
