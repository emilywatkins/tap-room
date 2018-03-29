import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
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


  compare(a,b) {
    if (a.price > b.price)
      return -1;
    if (a.price < b.price)
      return 1;
    return 0;
  }

  stockColor(currentKeg) {
    if (currentKeg.pints === 0){
      // alert('you\'re all out of ' + currentKeg.name);
      return "deadKeg";
    } else if(currentKeg.pints <= 2) {
      return "bg-danger";
    } else if (currentKeg.pints <= 5) {
      return "bg-warning";
    } else {
      return "bg-success";
    }
  }


  ngOnInit() {
    this.childKegList.sort(this.compare);
  }

  constructor() { }
}
