import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateformate'
})
export class DateformatePipe implements PipeTransform {
 datepipe:DatePipe = new DatePipe('en-US');

  transform(value: string): String {
    var data = this.datepipe.transform(new Date(value));
    return data
  }

}
