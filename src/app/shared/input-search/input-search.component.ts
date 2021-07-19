import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEventSearch, ICountry } from '../../core/models/sing-in.interfaces';


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
  @Output('changeValue') changeValue: EventEmitter<IEventSearch>;

  constructor() {
    this.changeValue = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public showItems(): void {
    this.isActive = true;
  }

  public selected({ name, capital }: ICountry): void {
    this.isActive = false;
    this.inputValue = name;
    this.changeValue.emit({ name, province: capital })
  }

}
