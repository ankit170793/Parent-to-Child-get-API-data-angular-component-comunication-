import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, VERSION } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
 User:any=[];
 UserDetail:any

  constructor(private http:HttpClient){
  }

  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users/');
  }
 
  ngOnInit(){
    this.getData().subscribe(res => {
      this.UserDetail = res;
    })
  }
  
}
