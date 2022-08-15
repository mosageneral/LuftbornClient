import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {
BackEndLink = "https://asr.devmosa.tk/api/User/"
  constructor(private Api:HttpClient) { }
  GetAllUsers(){
    return this.Api.get(this.BackEndLink+"GetAllUsers");
  }
  GetUserById(UserId:any){
    return this.Api.get(this.BackEndLink+"GetUserById?UserId="+UserId);
  }
  DeleteUser(UserId:any){
    return this.Api.get(this.BackEndLink+"DeleteUser?UserId="+UserId);
  }
Login(Data:any){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
      });
  return this.Api.post(`${this.BackEndLink}Login`, Data, { headers: headers });
}
Register(Data:any){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
      });
  return this.Api.post(`${this.BackEndLink}RegisterUser`, Data, { headers: headers });
}
RegisterFaceBook(Data:any){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
      });
  return this.Api.post(`${this.BackEndLink}SocialLogin`, Data, { headers: headers });
}
EditUser(Data:any){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
      });
  return this.Api.post(`${this.BackEndLink}UpdateUser`, Data, { headers: headers });
}
}
