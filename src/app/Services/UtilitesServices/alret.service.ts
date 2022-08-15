import { BackEndService } from './../BackEndService/back-end.service';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlretService {

  constructor(private BackEndService:BackEndService) { }
  ShowAlert(Title:string,Text:string){
    console.log("dd");
    
    Swal.fire({
      title: Title,
      text: Text,
      icon: 'info',
      confirmButtonText: 'Ok'
    })
  }
deleteUser(UserID:any){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    
    if (result.isConfirmed) {
      this.BackEndService.DeleteUser(UserID).subscribe(a=>{
        Swal.fire(
          'Deleted!',
          'Your Record has been deleted.',
          'success'
        )
      });
    
    }
  })
}
  IsLoggedIn():boolean{
    if(localStorage.getItem("token")){
      return true
    }else{
      return false
    }
  }
}
