import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-theloai',
  templateUrl: './theloai.component.html',
  styleUrls: ['./theloai.component.css']
})
export class TheloaiComponent implements OnInit {
  public res: any;
  public lstTheloai:[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.post('https://localhost:44304/'​+'api/Theloai/get-all', null).subscribe(result => {
      this.res = result;
      this.lstTheloai = this.res.data;
      console.log(this.res);
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}
