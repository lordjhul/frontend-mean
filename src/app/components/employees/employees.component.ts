import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../../services/employee.service'
import { NgForm } from '@angular/forms';


import { Employee } from 'src/app/models/employee';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService],
})
export class EmployeesComponent implements OnInit {

  public page_title:string;
  constructor(public employeeService: EmployeeService) {
    this.page_title='Pagina Empleados'
   }
  

  ngOnInit(): void {
     this.getEmployees();
  }
  addEmployee(form: NgForm) {
    this.employeeService.postEmployee(form.value)
    .subscribe(res =>
    {
      this.resetForm(form);
      this.getEmployees();
    })
  }
  getEmployees()
  {
    this.employeeService.getEmployees()
    .subscribe( res => 
      {
        this.employeeService.employees =res as Employee[];
        console.log(res);
      });
  }
  resetForm(form?: NgForm)
  {
    if(form){
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }
}
