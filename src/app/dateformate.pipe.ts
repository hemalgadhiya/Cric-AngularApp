import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { locale } from 'moment';

@Pipe({
  name: 'dateformate'
})
export class DateformatePipe implements PipeTransform {
 datepipe:DatePipe = new DatePipe('en-US');

  transform(value: string, offset?:number ): String {
    var data = this.datepipe.transform(new Date(value));
    return data
  }

}
