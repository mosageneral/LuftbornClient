import { Router } from '@angular/router';
import { BackEndService } from './../../../Services/BackEndService/back-end.service';
import { UserService } from './../../../Services/UserService/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  EditForm = new FormGroup({})
  Id: any;
  user: any;

  constructor(private Router:Router,private Api: BackEndService, private UserService: UserService, private activatedRoute: ActivatedRoute) {
    // subscribe to router event
    this.Id = this.activatedRoute.snapshot.paramMap.get('id');


    this.Api.GetUserById(this.Id).subscribe(a => {
      this.user = a;
      console.log(a);

    }, eer => {

    }, () => {
      this.EditForm = new FormGroup({
        FullName: new FormControl(this.user.fullName, Validators.required),
        Name: new FormControl(this.user.fullName, Validators.required),
        Email: new FormControl(this.user.email, Validators.required),
        Image: new FormControl(this.user.image, Validators.required),
     


      })
    });


  }
  Edit() {

    this.UserService.Edit(this.Id, this.EditForm.value.Name, this.EditForm.value.Email, this.user.password, this.EditForm.value.Image);
this.Router.navigate(['/'])


  }
  ngOnInit(): void {
  }


}
