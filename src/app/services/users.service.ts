import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }


  getuser(user:any){
    return this.http.post('http://localhost:1234/login',user,({responseType:'text'}));
  }



  register(user1:any){
    return this.http.post('http://localhost:1234/reg',user1,({responseType:'text'}));
   
  }
  
  
}
