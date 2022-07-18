import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Employee Management | Login',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Employee Management | Home',
    canActivate: [AuthGuardService],
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    title: 'Employee Management | Employees',
    canActivate: [AuthGuardService],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
