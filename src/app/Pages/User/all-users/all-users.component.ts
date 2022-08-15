import { AlretService } from './../../../Services/UtilitesServices/alret.service';
import { BackEndService } from './../../../Services/BackEndService/back-end.service';
import { UserService } from './../../../Services/UserService/user.service';
import { Component, OnInit, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit,AfterViewInit,OnChanges  {
  Users: any;

  constructor(public UserService:BackEndService,public AlretService:AlretService) {

   }
  ngOnChanges(changes: SimpleChanges): void {
    this.getData();

  }
  ngAfterViewInit(): void {
    this.getData();

  }

  ngOnInit(): void {
    
  }
  
  getData(){
    
    this.UserService.GetAllUsers().subscribe(a=>{
    this.Users=a;
    console.log(a);
    
   });  
  }
deleteUser(userId:any){
  this.UserService.DeleteUser(userId).subscribe(a=>{
    Swal.fire(
      'Deleted!',
      'Your Record has been deleted.',
      'success'
    )
    this.getData();

  });

}

  EditUser(User:any){

  }

}
