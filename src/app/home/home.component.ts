import { Component } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private service:BooksService){}

books:any;
msg:any;
data:any;
modalRef: any;


  ngOnInit(){
    this.service.getbook().subscribe((result)=>{
      this.books=result;
      console.log(this.books);
    })
  }

  delete(b:any){
    this.service.delete(b).subscribe((result)=>{
      this.msg=result;
      alert(this.msg);
    })
    this.service.getbook().subscribe((result)=>{
      this.books=result;
    })
    
  }

  update(b:any){
   b.show=false;
    this.service.update(b).subscribe((result)=>{
      this.msg=result;
      alert(this.msg);
    });
  }

  
  edit(b:any){
    b.show=true;
  }
}

