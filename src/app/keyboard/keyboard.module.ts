import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KeyboardComponent} from './keyboard.component';
import {KeyboardItemComponent} from "../keyboard-item/keyboard-item.component";


@NgModule({
  declarations: [
    KeyboardComponent,
    KeyboardItemComponent
  ],
  exports: [
    KeyboardComponent,
    KeyboardItemComponent
  ],
  imports: [
    CommonModule
  ],
})
export class KeyboardModule {
}
