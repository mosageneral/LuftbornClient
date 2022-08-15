
import { UserDetailsComponent } from './Pages/User/user-details/user-details.component';
import { AllUsersComponent } from './Pages/User/all-users/all-users.component';
import { UpdateComponent } from './Pages/User/update/update.component';
import { RegisterComponent } from './Pages/User/register/register.component';
import { LoginComponent } from './Pages/User/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:"Login",component:LoginComponent},
  {path:"Register",component:RegisterComponent},
  {path:"Update/:id",component:UpdateComponent},
  {path:"AllUsers",component:AllUsersComponent},
  {path:"UserDetails:/id",component:UserDetailsComponent},
  { path: '', redirectTo: '/AllUsers', pathMatch: 'full' },

 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
