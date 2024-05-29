import { Component } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  constructor(private service:BooksService,private route:Router){}

  bookName:any;
  author:any;
  genre:any;
  year:any;
  image:any;
  addBook:any;
  msg:any;

  add(){
    this.addBook={
    bookName:this.bookName,
    author:this.author,
    genre:this.genre,
    year:this.year,
    image:this.image,
    show:false
    }
    this.service.add(this.addBook).subscribe((result)=>{
      this.msg=result;
     
      if(this.msg=="New Book Added!"){
      Swal.fire({
        title: "Added Successfully!",
        text: "Now you can see it in Home!",
        icon: "success"
      });
    }
    else{
      alert(this.msg);
    }
      this.route.navigateByUrl('admin/home');
    });
    
    }
    
    }
