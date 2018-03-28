import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickedEdit = new EventEmitter();
  @Output() clickedSell = new EventEmitter();

  // filterByEmptiness: string = "underTen";

  editButtonClicked(kegToEdit: Keg) {
    this.clickedEdit.emit(kegToEdit);
  }

  sellButtonClicked(kegToSell: Keg) {
    this.clickedSell.emit(kegToSell);

  }

  stockColor(currentKeg) {
    if(currentKeg.pints <= 10) {
      return "bg-danger";
    } else if (currentKeg.pints <= 42) {
      return "bg-warning";
    } else {
      return "bg-success";
    }
  }

  // onChange(optionFromMenu) {
  //   this.filterByEmptiness = optionFromMenu;
  // }



  constructor() { }
}
