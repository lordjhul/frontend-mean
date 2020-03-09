import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from '../models/employee';
//import { EmployeeComponent} from '../components/employees/employees.component';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  selectedEmployee: Employee;
  employees: Employee[];
  readonly URI_API='http://localhost:3000/api/employees';

  constructor(
    private http: HttpClient
  ) {
    this.selectedEmployee = new Employee();
   }

  getEmployees(){
    return this.http.get(this.URI_API)
  }
  postEmployee(Employee: Employee){
    return this.http.post(this.URI_API, Employee)
  }
  putEmployee(employee: Employee){
    return this.http.put(this.URI_API + `/${employee._id}`,employee)
  }
  deleteEmployee(_id:string){
     return this.http.delete(this.URI_API + `/${_id}`);
  }

}
