import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputExerciseComponent } from './input-exercise.component';
import { InputItemComponent } from '../input-item/input-item.component';

@NgModule({
  declarations: [InputExerciseComponent, InputItemComponent],
  exports: [InputExerciseComponent],
  imports: [CommonModule],
})
export class InputExerciseModule {}
