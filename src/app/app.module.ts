import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

//Components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//service
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { EmployeeService } from './service/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeesComponent,
    PageNotFoundComponent,
    EditEmployeeComponent,
    AddEmployeeComponent,
  ],
  imports: [
    //Angular
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //Material
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
  ],
  providers: [AuthService, AuthGuardService, EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
