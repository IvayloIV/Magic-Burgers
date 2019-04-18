import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent {
  allStatus: string[] = ['Pending', 'In Progress', 'In Transit', 'Delivered'];
  @Input() status: string;
  @Output() statusChanged = new EventEmitter<string>();

  changeStatus(newStatus: string) {
    this.statusChanged.emit(newStatus);
  }
}
