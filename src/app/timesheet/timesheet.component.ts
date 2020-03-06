import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../employee/employeeModel';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';
import { ITask } from './taskModel';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {
  curr=new Date;
  week=[];
  weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  weekdays = [];
  weekdate= [];
  _listFilter: string;
  errorMessage : string;

  filteredemployees: IEmployee[];
  employees: IEmployee[];
  tasks: ITask[];

  constructor(private employeeService: EmployeeService,
              private taskService: TaskService,
              private router : Router,
              private route: ActivatedRoute) {
    this.displayWeek();
   }

  ngOnInit(): void {
    this.GetAllEmployees();
    this.GetAllTasks();
  }

  private GetAllEmployees() {
    this.employeeService.getallemployees().subscribe({
      next: (employees: IEmployee[]) => {
        this.employees = employees;
        this.filteredemployees = this.employees;
        console.log(employees);
      },
      error: err => this.errorMessage = err
    });
  }

  private GetAllTasks() {
    this.taskService.getallTasks().subscribe({
      next: (tasks: ITask[]) => {
        this.tasks = tasks;
        console.log(tasks);
      },
      error: err => this.errorMessage = err
    });
  }

  displayWeek()
  {
    for(let i=0; i < 7; i++)
    {
      let first=this.curr.getDate() - this.curr.getDay() + i
      let day = new Date(this.curr.setDate(first)).toISOString().slice(0,10)
      this.week.push(day)
      var firstdate = this.weekday[first -1]
      this.weekdays.push(firstdate);
    }
    console.log(this.week);
    console.log(this.weekdays);
  }

  performFilter(filterBy: string): IEmployee[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.employees.filter((employee: IEmployee) =>
            employee.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

  filterEmployees(filterVal: any) {
    this._listFilter = filterVal;
    this.filteredemployees= this._listFilter!=="0" ? this.performFilter(this._listFilter) : this.employees;
  }

  Back(): void {
    //Navigate back to the employee list
    this.router.navigate(['/employee']);
  }

}
