import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { WorkOrderService } from '@mes/api';

@Component({
  imports: [RouterModule, AsyncPipe],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  private service = inject(WorkOrderService);
  data: any;
  workOrders$: Observable<any> | undefined;

  ngOnInit() {
    this.workOrders$ = this.service.getWorkOrders();
  }

  changeStatus(id: string, status: string) {
    // We don't need to manually refresh the list
    // Apollo's cache will handle the UI update automatically!
    this.service.updateStatus(id, status).subscribe({
      next: (res) => console.log(`Status moved to ${status}`),
      error: (err) => alert('Factory comms error: ' + err.message),
    });
  }
}
