import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-muontra',
  templateUrl: './muontra.component.html',
  styleUrls: ['./muontra.component.css']
})
export class MuontraComponent implements OnInit {
  muontra: any={
    data:[],
    totalRecord:0,
    page:0,
    size:2,
    totalPage:0
  }

  muontra1: any ={
    maMt:"60003",
    maThe:"40001",
    ngaymuon:"2019-11-07T00:00:00",
    
  }
  isEdit: boolean=true;
  

  constructor(
    private http: HttpClient, 
    @Inject('BASE_URL') baseUrl: string) {}
    
  ngOnInit() {
    this.searchmuontra(1);
  }

  searchmuontra(cPage){
    let x ={
      page:cPage,
      size:2,
      keyword:""
    }
    this.http.post("https://localhost:44304/api/Muontra/search-muon-tra",x).subscribe(result => {
      this.muontra = result;
      this.muontra = this.muontra.data;
      
    }, error => console.error(error));
  }
  searchNext(){
    
    if(this.muontra.page<this.muontra.totalPage){
      let nextPage =this.muontra.page + 1;
      let x ={
        page:nextPage,
        size:2,
        keyword:""
      }
      this.http.post("https://localhost:44304/api/Muontra/search-muon-tra",x).subscribe(result => {
        this.muontra = result;
        this.muontra = this.muontra.data;
      }, error => console.error(error));
    }
    else(alert("Ban dang o cuoi trang!"))
  }
  searchPrevious(){
    if(this.muontra.page>1){
      let nextPage =this.muontra.page - 1;
      let x ={
        page:nextPage,
        size:2,
        keyword:""
      }
      this.http.post("https://localhost:44304/api/Muontra/search-muon-tra",x).subscribe(result => {
        this.muontra = result;
        this.muontra = this.muontra.data;
      }, error => console.error(error));
    }
    else(alert("Ban dang o dau trang!"))
  }
  openModal(isNew,index)
  {
    if(isNew)
    {
      this.isEdit= false;
        this.muontra1 ={
        maMt:"",
        maThe:"",
        ngaymuon:"",
        
      }
    }
    else{
      this.isEdit= true;
      this.muontra1 = this.muontra.data[index];
    }
  }

}