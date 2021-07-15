import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'wolox-app';
  inputValue = '';
  public countrys:any = [];
  isActive = false;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  //   const url = 'https://restcountries.eu/rest/v2/all?fields=name;flag;capital';
  // this.http.get(url).subscribe((countrys:any)=>{
  //     this.countrys = countrys;
  //     console.log(this.countrys);
  //   });
  //   console.log(this.countrys);
    
  }


  click(country: any) {
    this.isActive = false;
    this.inputValue = country['name']
  }

  showItems(event : any) {
    this.isActive = true;
  }
}
