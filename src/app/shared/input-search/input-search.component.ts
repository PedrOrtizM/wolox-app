import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
  public isActive = false;
  public inputValue = '';
  @Input() list:any = [];
  @Input() propName:any;
  constructor() { }

  ngOnInit(): void {
  }
  showItems(event : any) {
    this.isActive = true;
  }
  click(country: any) {
    this.isActive = false;
    this.inputValue = country['name']
  }

}
