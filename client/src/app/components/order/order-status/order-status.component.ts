import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent {
  @Input() status: string;
  @Output() statusChanged = new EventEmitter<string>();

  changeStatus(newStatus: string) {
    this.statusChanged.emit(newStatus);
  }
}
