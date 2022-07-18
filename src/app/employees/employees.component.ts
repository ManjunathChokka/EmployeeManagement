import { Employee } from './../model/emploee.model';
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'eID',
    'name',
    'email',
    'experience',
    'edit',
    'delete',
  ];
  addEmployeeSelected = false;
  editEmployeeSelected = false;
  employees: Employee[] = [];
  dataSource = new MatTableDataSource<Employee>();
  editEmployessDetails!: Employee;

  constructor(
    private employeeService: EmployeeService // private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
      this.dataSource.data = this.employees;
    });
  }

  // on Delete
  onDelete(selectedEmloyee: Employee) {
    this.addEmployeeSelected = false;
    this.editEmployeeSelected = false;
    this.employees = this.employees.filter(
      (employee) => employee.eID !== selectedEmloyee.eID
    );
    this.dataSource.data = this.employees;
  }

  //  on Add Employee

  //This is btn on this componnent;
  //This Method displays the Add child component on the page
  onAddEmployee() {
    this.addEmployeeSelected = true;
    this.editEmployeeSelected = false;
  }

  //This Event is triggerd from Child Component: Add Employee
  addEmployeeEventListener(employee: Employee) {
    this.employees.push(employee);
    this.dataSource.data = this.employees;
  }

  //on Edit Employee

  //This is btn on this componnent;
  //This Method displays the Edit child component on the page
  onEditEmployee(employee: Employee) {
    this.editEmployessDetails = employee;
    this.addEmployeeSelected = false;
    this.editEmployeeSelected = true;
  }
  //This Event is triggerd from Child Component: Edit Employee
  editEmployeeEventListener(selectedEmloyee: Employee) {
    this.employees.forEach((employee: Employee, index: number) => {
      if (employee.eID === selectedEmloyee.eID) {
        employee.name = selectedEmloyee.name;
        employee.email = selectedEmloyee.email;
        employee.experience = selectedEmloyee.experience;
      }
    });
    this.dataSource.data = this.employees;
  }
  ngAfterViewInit(): void {}
}
