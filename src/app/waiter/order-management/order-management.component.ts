import { Component } from '@angular/core';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css'],
})
export class OrderManagementComponent {
  order: string = '';
  tableNumber: string = '';
  message: string = '';

  onSubmit() {
    // Lógica para crear una orden
    this.message = `Orden ${this.order} creada para la mesa ${this.tableNumber}.`;
  }
}
