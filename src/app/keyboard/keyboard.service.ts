import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, pluck, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeyboardService implements OnInit, OnDestroy {
  obsList = [] as Subscription[];
  keyDown$!: Observable<KeyboardEvent>;
  keyup$!: Observable<KeyboardEvent>;
  keyDownCode$!: Observable<string>;
  keyUpCode$!: Observable<string>;

  constructor() {
    this.keyDown$ = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      tap((e) => e.preventDefault())
    );
    this.keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
    this.keyDownCode$ = this.keyDown$.pipe(pluck('code'));
    this.keyUpCode$ = this.keyup$.pipe(pluck('code'));

    this.obsList.push(
      this.keyDown$.subscribe((code) =>
        console.log(Date.now(), 'Keyboard down code --->', code)
      )
    );
    // this.obsList.push(
    //   this.keyUpCode$.subscribe((code) =>
    //     console.log(Date.now(), 'Keyboard up code --->', code)
    //   )
    // );
  }

  ngOnDestroy() {
    for (const obs of this.obsList) {
      obs.unsubscribe();
    }
  }

  ngOnInit(): void {}
}
