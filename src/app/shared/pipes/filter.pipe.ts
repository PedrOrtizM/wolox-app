import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(list:Array<any> = [], prop: string, searchValue: string): any[] {

    if (!searchValue) return list;

    return list.filter(
      (item: any) =>
        item[prop].toLowerCase().includes(searchValue.toLowerCase()));
  }
}