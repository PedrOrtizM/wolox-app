import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
  public isActive = false;
  public inputValue = '';
  @Input() list: any = [];
  @Input() propName: any;
  @Output('changeValue') changeValue: EventEmitter<Object>;
  constructor() {
    this.changeValue = new EventEmitter();
  }

  ngOnInit(): void {
  }
  showItems(event: any) {
    this.isActive = true;
  }
  click({ name, capital }: any) {
    this.isActive = false;
    this.inputValue = name;
    this.changeValue.emit({ name, province: capital })
  }

}
