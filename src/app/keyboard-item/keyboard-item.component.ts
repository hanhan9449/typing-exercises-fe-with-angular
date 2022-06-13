import { Component, Input, OnInit } from '@angular/core';
import { VariantType } from './variant.type';
import { defaultKeyboardItemConfig } from '../keyboard/keyboard.config';
import { ColorType } from './keyboard-item.interface';

@Component({
  selector: 'app-keyboard-item',
  templateUrl: './keyboard-item.component.html',
  styleUrls: ['./keyboard-item.component.css'],
})
export class KeyboardItemComponent implements OnInit {
  @Input() line1?: string = '';
  @Input() line2?: string;
  @Input() width?: number = defaultKeyboardItemConfig.width;
  @Input() height?: number = defaultKeyboardItemConfig.height;
  @Input() color?: ColorType = 'milk-white';
  @Input() variant?: VariantType = 'one-line';

  constructor() {}

  ngOnInit(): void {}
  shouldShowLine2(): boolean {
    return this.variant === 'two-line';
  }
  getColor(): ColorType {
    if (!this.color) {
      return 'milk-white';
    }
    return this.color;
  }
  getWidth(): number {
    if (!this.width) {
      return defaultKeyboardItemConfig.width;
    }
    return this.width;
  }
  getHeight(): number {
    if (!this.height) {
      return defaultKeyboardItemConfig.height;
    }
    return this.height;
  }
}
