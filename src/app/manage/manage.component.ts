import { Component } from '@angular/core';
import { BooksService } from '../services/books.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {

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
        if(this.msg=="Book deleted"){
          Swal.fire({
            title: "Book Deleted!",
            text: "Removed from MyLibrary!",
            icon: "warning"
          });
        }
        else{
          alert(this.msg);
        }
      });
      this.service.getbook().subscribe((result)=>{
        this.books=result;
      });

      
    }
  
    update(b:any){
     b.show=false;
      this.service.update(b).subscribe((result)=>{
        this.msg=result;
        if(this.msg=="Book details Updated"){
          Swal.fire({
            title: "Book details Updated!",
            icon: "success"
          });
        }
        else{
          alert(this.msg);
        }
      });
    }
  
    
    edit(b:any){
      b.show=true;
    }
}
