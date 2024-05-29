import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userservice:UsersService, private route:Router){}

  username:any;
  password:any;
  username1:any;
  password1:any;
  email:any;
  phone:any;
  user:any;
  user1:any;
  msg:any;


  Login(){
    this.user={
      username:this.username,
      password:this.password
    };
    this.userservice.getuser(this.user).subscribe((result:any)=>{
    this.msg=result;
   
    if(this.msg=="Login Success!"){
      Swal.fire({
        title: "Login Succes!",
        text: "Redirecting to MyLibrary!",
        icon: "success"
      });
    this.route.navigateByUrl('/admin/home');
    }
    else{
      alert(this.msg);
    }
    })
  }

  register(){
    this.user1={
      username:this.username1,
      password:this.password1,
      email:this.email,
      phone:this.phone
    };
    this.userservice.register(this.user1).subscribe((result:any)=>{
      this.msg=result;

      if(this.msg=="Registered Successfully!"){
        Swal.fire({
          title: "Registered Successfully!",
          text: "Now you can Login!",
          icon: "success"
        });
      }
      else{
        alert(this.msg);
      }
      }); 
      console.log(this.user1);
  }


}
