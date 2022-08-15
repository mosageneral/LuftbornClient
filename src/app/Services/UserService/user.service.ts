import { AlretService } from './../UtilitesServices/alret.service';
import { Router } from '@angular/router';
import { BackEndService } from './../BackEndService/back-end.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Api: BackEndService, private Router: Router, private Alert: AlretService) { }
  Register(FullName:any,Email:any,Password:any,Image:any){
    var Data = {
      FullName: FullName,
      Email: Email,
      Password: Password,
      image:Image

    }
    this.Api.Register(Data).subscribe((a: any) => {
       console.log(a);

    })
  }
  Edit(Id:any,FullName:any,Email:any,Password:any,Image:any){
    var Data = {
      Id:Id,
      FullName: FullName,
      Email: Email,
      Password: Password,
      image:Image

    }
    this.Api.EditUser(Data).subscribe((a: any) => {
       console.log(a);

    })
  }
  RegisterSocial(FullName:any,Email:any,Password:any,Image:any){
    var Data = {
      FullName: FullName,
      Email: Email,
      Password: Password,
      image:Image

    }
    this.Api.RegisterFaceBook(Data).subscribe((a: any) => {
      localStorage.setItem("token", a.token)
      localStorage.setItem("user", a.user)
      if (this.Alert.IsLoggedIn()) {
        this.Router.navigate(["/"])
      }
    })
  }
  Login(Email: any, Password: any){
    var Data = {
      Cred: Email,
      Password: Password
    }
    this.Api.Login(Data).subscribe((a: any) => {
      localStorage.setItem("token", a.token)
      localStorage.setItem("user", a.user)
      if (this.Alert.IsLoggedIn()) {
        this.Router.navigate(["/"])
      }else{
      this.Alert.ShowAlert("Wrong Credentials","Please Make Sure Of Your Credentials")

      }
    
    }, err => {
      this.Alert.ShowAlert("Wrong Credentials","Please Make Sure Of Your Credentials")
   


    })
   
  }
}
