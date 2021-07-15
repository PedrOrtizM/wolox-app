import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(list: [] = [], prop: string, searchValue: string): any[] {
    console.log(prop);

    if (!searchValue) return list;

    return list.filter(
      (item: any) =>
        item[prop].toLowerCase().includes(searchValue.toLowerCase()));
  }
}