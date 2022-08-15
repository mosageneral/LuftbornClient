import { AlretService } from './../../../Services/UtilitesServices/alret.service';
import { UserService } from './../../../Services/UserService/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  FacebookLoginProvider,
  SocialUser,
} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm = new FormGroup({})
  socialUser!: SocialUser;
  isLoggedin!: boolean;

  constructor(private UserService:UserService, private socialAuthService: SocialAuthService,private Alert:AlretService) {
    this.LoginForm = new FormGroup({
      Email: new FormControl('',Validators.required),
      Password: new FormControl('',Validators.required)
    })
   }
   Login(){

 let Result = this.UserService.Login(this.LoginForm.value.Email,this.LoginForm.value.Password)

   }
  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(user);
     if(user.email==undefined){
      this.UserService.RegisterSocial(user.name,'Social_Media_Account@HasNoMail.net',user.id,user.photoUrl)

     }else{
      this.UserService.RegisterSocial(user.name,user.email,user.id,user.photoUrl)

     }
      
    });
  }
  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.socialAuthService.signOut();
  }

}
