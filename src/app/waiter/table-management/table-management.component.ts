import { Component } from '@angular/core';

@Component({
  selector: 'app-table-management',
  templateUrl: './table-management.component.html',
  styleUrls: ['./table-management.component.css'],
})
export class TableManagementComponent {
  tableNumber: string = '';
  location: string = '';
  capacity: number | null = null;
  message: string = '';

  onSubmit() {
    // Lógica para crear una mesa
    this.message = `Mesa ${this.tableNumber} creada en ${this.location} para ${this.capacity} personas.`;
  }
}
