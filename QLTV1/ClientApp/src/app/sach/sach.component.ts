import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sach',
  templateUrl: './sach.component.html',
  styleUrls: ['./sach.component.css']
})
export class SachComponent implements OnInit {
  sach: any={
    data:[],
    totalRecord:0,
    page:0,
    size:2,
    totalPage:0
  }

  Sach1: any ={
    maSach:"1",
    tenSach:"Doraemon",
    maTl:"45879",
    maTg:"16996",
    namSx:"1982-06-05"
  }
  isEdit: boolean=true;
  

  constructor(
    private http: HttpClient, 
    @Inject('BASE_URL') baseUrl: string) {}
    
  ngOnInit() {
    this.searchSach(1);
  }

  searchSach(cPage){
    let x ={
      page:cPage,
      size:2,
      keyword:""
    }
    this.http.post("https://localhost:44304/api/Sach/search-sach",x).subscribe(result => {
      this.sach = result;
      this.sach = this.sach.data;
      
    }, error => console.error(error));
  }
  searchNext(){
    
    if(this.sach.page<this.sach.totalPage){
      let nextPage =this.sach.page + 1;
      let x ={
        page:nextPage,
        size:2,
        keyword:""
      }
      this.http.post("https://localhost:44304/api/Sach/search-sach",x).subscribe(result => {
        this.sach = result;
        this.sach = this.sach.data;
      }, error => console.error(error));
    }
    else(alert("Ban dang o cuoi trang!"))
  }
  searchPrevious(){
    if(this.sach.page>1){
      let nextPage =this.sach.page - 1;
      let x ={
        page:nextPage,
        size:2,
        keyword:""
      }
      this.http.post("https://localhost:44304/api/Sach/search-sach",x).subscribe(result => {
        this.sach = result;
        this.sach = this.sach.data;
      }, error => console.error(error));
    }
    else(alert("Ban dang o dau trang!"))
  }
  openModal(isNew,index)
  {
    if(isNew)
    {
      this.isEdit= false;
        this.Sach1 ={
        maSach:"",
        tenSach:"",
        maTl:"",
        maTg:"",
        namSx:""
      }
    }
    else{
      this.isEdit= true;
      this.Sach1 = this.sach.data[index];
    }
  }

}
