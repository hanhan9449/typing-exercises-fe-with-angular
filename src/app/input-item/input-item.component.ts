import { Component, Input, OnInit } from '@angular/core';
import { InputItemStateType } from './input-item-state.type';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.css'],
})
export class InputItemComponent implements OnInit {
  @Input() ch!: string;
  @Input() state?: InputItemStateType = 'grey';

  constructor() {}

  ngOnInit(): void {}

  getState(): InputItemStateType {
    if (!this.state) {
      return 'grey';
    }
    return this.state;
  }
}
