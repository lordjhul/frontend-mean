//Import necesarios
import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//Importar Componetes
import {EmployeesComponent} from './components/employees/employees.component';
import {ErrorComponent} from './components/error/error.component'


const appRoutes: Routes = [
    {path: '', component: EmployeesComponent},
    {path: 'inicio', component: EmployeesComponent },
    {path: '**', component: ErrorComponent },
  
];
//Export Configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);