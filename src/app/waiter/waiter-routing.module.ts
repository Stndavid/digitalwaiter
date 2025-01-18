import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaiterDashboardComponent } from './waiter-dashboard/waiter-dashboard.component';
import { TableManagementComponent } from './table-management/table-management.component';
import { OrderManagementComponent } from './order-management/order-management.component';

const routes: Routes = [
  { path: 'dashboard', component: WaiterDashboardComponent },
  { path: 'tables', component: TableManagementComponent },
  { path: 'orders', component: OrderManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaiterRoutingModule {}
