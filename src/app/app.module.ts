import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeyboardModule } from './keyboard/keyboard.module';
import { InputExerciseModule } from './input-exercise/input-exercise.module';
import { SpeedCountModule } from './speed-count/speed-count.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    KeyboardModule,
    InputExerciseModule,
    SpeedCountModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
