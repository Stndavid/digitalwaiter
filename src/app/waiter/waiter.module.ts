import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WaiterRoutingModule } from './waiter-routing.module';
import { WaiterDashboardComponent } from './waiter-dashboard/waiter-dashboard.component';
import { TableManagementComponent } from './table-management/table-management.component';
import { OrderManagementComponent } from './order-management/order-management.component';

@NgModule({
  declarations: [
    WaiterDashboardComponent,
    TableManagementComponent,
    OrderManagementComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    WaiterRoutingModule,
  ],
})
export class WaiterModule {}
