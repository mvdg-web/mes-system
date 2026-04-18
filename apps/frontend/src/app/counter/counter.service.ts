import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  serviceSignalCounter = signal(0);

  incrementCounter() {
    return this.serviceSignalCounter.update((counter) => counter + 1);
  }
}
