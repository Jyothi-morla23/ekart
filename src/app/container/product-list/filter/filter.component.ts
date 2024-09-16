import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() inStocks: number = 0;
  @Input() ouStock: number = 0;

  @Output() selectedRadioButtonChanged: EventEmitter<string> =
    new EventEmitter<string>();

  selectedFilterdButton: string = 'all';

  onSelectedFiltereRadioButtonChanged() {
    this.selectedRadioButtonChanged.emit(this.selectedFilterdButton);
  }
}
