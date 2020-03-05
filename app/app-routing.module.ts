import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/employee.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { EmployeeDetailGuard } from './employee/employee-detail.guard';


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([      
      { path: 'employee', component: EmployeeListComponent },
      { path: 'employee/:id', 
      canActivate: [EmployeeDetailGuard],
      component: TimesheetComponent },
      { path: 'timesheet', component: TimesheetComponent },
      { path: '', redirectTo: 'employee', pathMatch: 'full' },
      { path: '**', redirectTo: 'employee', pathMatch: 'full'}
    ]),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }