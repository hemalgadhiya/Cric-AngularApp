import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'timeformat'
})
export class TimeformatPipe implements PipeTransform {
  datepipe:DatePipe = new DatePipe('en-US');

  transform(value: string, offset:string): string {
   var time = this.datepipe.transform(value,'shortTime',offset)
   return time
  }

}
