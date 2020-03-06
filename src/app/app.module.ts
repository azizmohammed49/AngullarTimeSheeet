import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    TimesheetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    EmployeeService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
