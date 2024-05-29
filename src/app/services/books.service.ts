import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }


  getbook(){
    return this.http.get('http://localhost:1234/books',({responseType:'json'}));
  }

  add(book:any){
    return this.http.post('http://localhost:1234/add',book,({responseType:'text'}));
  }

  delete(b:any){
    let res=b._id;
    return this.http.delete(`http://localhost:1234/del/${res}`,({responseType:'text'}));
  }

  update(b:any){
    let res=b._id;
    return this.http.put(`http://localhost:1234/update/${res}`,b,({responseType:'text'}));
  }
}
