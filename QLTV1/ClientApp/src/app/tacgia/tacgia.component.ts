import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tacgia',
  templateUrl: './tacgia.component.html',
  styleUrls: ['./tacgia.component.css']
})
export class TacgiaComponent implements OnInit {

  tacgia: any={
    data:[],
    totalRecord:0,
    page:0,
    size:2,
    totalPage:0
  }

  tacgia1: any ={
    maTg:"20001",
    tenTg:"Nguyen Nhat Anh",
    
  }
  isEdit: boolean=true;
  

  constructor(
    private http: HttpClient, 
    @Inject('BASE_URL') baseUrl: string) {}
    
  ngOnInit() {
    this.searchtacgia(1);
  }

  searchtacgia(cPage){
    let x ={
      page:cPage,
      size:2,
      keyword:""
    }
    this.http.post("https://localhost:44304/api/Sach/search-sach",x).subscribe(result => {
      this.tacgia = result;
      this.tacgia = this.tacgia.data;
      
    }, error => console.error(error));
  }
  searchNext(){
    
    if(this.tacgia.page<this.tacgia.totalPage){
      let nextPage =this.tacgia.page + 1;
      let x ={
        page:nextPage,
        size:2,
        keyword:""
      }
      this.http.post("https://localhost:44304/api/Sach/search-sach",x).subscribe(result => {
        this.tacgia = result;
        this.tacgia = this.tacgia.data;
      }, error => console.error(error));
    }
    else(alert("Ban dang o cuoi trang!"))
  }
  searchPrevious(){
    if(this.tacgia.page>1){
      let nextPage =this.tacgia.page - 1;
      let x ={
        page:nextPage,
        size:2,
        keyword:""
      }
      this.http.post("https://localhost:44304/api/Sach/search-sach",x).subscribe(result => {
        this.tacgia = result;
        this.tacgia = this.tacgia.data;
      }, error => console.error(error));
    }
    else(alert("Ban dang o dau trang!"))
  }
  openModal(isNew,index)
  {
    if(isNew)
    {
      this.isEdit= false;
        this.tacgia1 ={
        maTg:"",
        tenTg:"",
        
      }
    }
    else{
      this.isEdit= true;
      this.tacgia1 = this.tacgia.data[index];
    }
  }

}
