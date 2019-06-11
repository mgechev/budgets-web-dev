import { Component, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private el: ElementRef) {}

  scroll$ = fromEvent(this.el.nativeElement, 'scroll').pipe(
    map((e: MouseEvent) => e.timeStamp)
  );
}
