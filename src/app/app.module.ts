import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeyboardModule } from './keyboard/keyboard.module';
import { InputExerciseModule } from './input-exercise/input-exercise.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, KeyboardModule, InputExerciseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
