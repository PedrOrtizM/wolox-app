import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WxInputDirective } from './directives/wx-input.directive';
import { InputSearchComponent } from './input-search/input-search.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    WxInputDirective,
    InputSearchComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    WxInputDirective,
    InputSearchComponent
  ]
})
export class SharedModule { }
