import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ctmuontra',
  templateUrl: './ctmuontra.component.html',
  styleUrls: ['./ctmuontra.component.css']
})
export class CtmuontraComponent implements OnInit {

  ctmuontra: any={
    data:[],
    totalRecord:0,
    page:0,
    size:2,
    totalPage:0
  }

  ctmuontra1: any ={
    maSach:"30001",
    maMt:"60001",
    daTra:"1",
    ngaytra:"2019-02-15",
    
  }
  isEdit: boolean=true;
  

  constructor(
    private http: HttpClient, 
    @Inject('BASE_URL') baseUrl: string) {}
    
  ngOnInit() {
    this.searchctmuontra(1);
  }

  searchctmuontra(cPage){
    let x ={
      page:cPage,
      size:2,
      keyword:""
    }
    this.http.post("https://localhost:44304/api/Ctmuontra/search-chi-tiet-muon-tra",x).subscribe(result => {
      this.ctmuontra = result;
      this.ctmuontra = this.ctmuontra.data;
      
    }, error => console.error(error));
  }
  searchNext(){
    
    if(this.ctmuontra.page<this.ctmuontra.totalPage){
      let nextPage =this.ctmuontra.page + 1;
      let x ={
        page:nextPage,
        size:2,
        keyword:""
      }
      this.http.post("https://localhost:44304/api/Ctmuontra/search-chi-tiet-muon-tra",x).subscribe(result => {
        this.ctmuontra = result;
        this.ctmuontra = this.ctmuontra.data;
      }, error => console.error(error));
    }
    else(alert("Ban dang o cuoi trang!"))
  }
  searchPrevious(){
    if(this.ctmuontra.page>1){
      let nextPage =this.ctmuontra.page - 1;
      let x ={
        page:nextPage,
        size:2,
        keyword:""
      }
      this.http.post("https://localhost:44304/api/Ctmuontra/search-chi-tiet-muon-tra",x).subscribe(result => {
        this.ctmuontra = result;
        this.ctmuontra = this.ctmuontra.data;
      }, error => console.error(error));
    }
    else(alert("Ban dang o dau trang!"))
  }
  openModal(isNew,index)
  {
    if(isNew)
    {
      this.isEdit= false;
        this.ctmuontra1 ={
        maSach:"",
        maMt:"",
        daTra:"",
        ngaytra:"",
       
      }
    }
    else{
      this.isEdit= true;
      this.ctmuontra1 = this.ctmuontra.data[index];
    }
  }

}
