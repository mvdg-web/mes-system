import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [RouterModule, JsonPipe],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  fruitsSignal = signal(['Apple', 'Banana', 'Orange']);

  protected addFruit() {
    this.fruitsSignal.update((fruits) => [...fruits, 'Mango']);
  }

  protected removeFruit() {
    this.fruitsSignal.update((fruits) => fruits.slice(0, -1));
  }
}
