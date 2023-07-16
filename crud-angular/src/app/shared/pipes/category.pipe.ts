import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Front End': return 'code';
      case 'Back End': return 'computer';
      case 'UX Designer': return 'developer_board';
      case 'Mobile': return 'smartphone';
    }

    return 'code';
  }

}
