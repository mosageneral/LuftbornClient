import { UserService } from './../../../Services/UserService/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm = new FormGroup({})

  constructor(private UserService:UserService) {
    this.RegisterForm = new FormGroup({
      Email: new FormControl('',Validators.required),
      FullName: new FormControl('',Validators.required),
      Password: new FormControl('',Validators.required),
      ConfirmPassword: new FormControl('',Validators.required)
     
    })
   }
   Register(){
console.log(this.RegisterForm.value);
this.UserService.Register(this.RegisterForm.value.FullName,this.RegisterForm.value.Email,this.RegisterForm.value.Password,"NoImage")



   }
  ngOnInit(): void {
  }


}
