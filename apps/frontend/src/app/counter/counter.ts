import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterService } from './counter.service';



@Component({
  selector: 'app-counter',
  imports: [],
  template: `
    <h1>Counter Component</h1>
    <h2>{{svc.serviceSignalCounter()}}</h2>
  <button (click)="incrementCounter()">Increment Counter</button>
  `,
  styleUrl: './counter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Counter {
   protected svc = inject(CounterService);

  protected incrementCounter() {
    this.svc.incrementCounter();
  }
}
