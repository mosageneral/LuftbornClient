import { Router } from '@angular/router';
import { AlretService } from './Services/UtilitesServices/alret.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LuftbornClient';
 
  constructor(public Service:AlretService,private Router:Router) {
  if(!this.Service.IsLoggedIn()){
this.Router.navigate(["/Login"])
  }
    
  }
  LogOut(){
    localStorage.clear();
   this.Router.navigate(["/Login"])

  }
}
