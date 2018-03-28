import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
name: "emptiness",
pure: false
})

export class EmptinessPipe implements PipeTransform {
  transform(input: Keg[], desiredEmptiness) {
    var output: Keg[] = [];
    if(desiredEmptiness === "underTen") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints <= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } 
  }

}
