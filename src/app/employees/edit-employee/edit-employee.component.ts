import { Employee } from './../../model/emploee.model';
import {
  Component,
  Input,
  Output,
  OnChanges,
  OnInit,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { experienceV } from 'src/validators/validators';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit, OnChanges {
  successCondition = false;
  successMessage = '';
  employeeForm;
  @Input() empployeeDetails!: Employee;
  @Output() editEvent = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.employeeForm = this.formBuilder.group({
      employeeId: [``],
      employeeName: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(25),
        ],
      ],
      employeeEmail: ['', [Validators.required, Validators.email]],
      experience: ['', [experienceV]],
    });
  }

  ngOnInit(): void {
    this.setEmployeeOnEdit();
  }
  ngOnChanges() {
    this.setEmployeeOnEdit();
  }
  get employeeId() {
    return this.employeeForm.get('employeeId');
  }

  get employeeName() {
    return this.employeeForm.get('employeeName');
  }
  get employeeEmail() {
    return this.employeeForm.get('employeeEmail');
  }
  get experience() {
    return this.employeeForm.get('experience');
  }

  setEmployeeOnEdit() {
    this.employeeForm.setValue({
      employeeId: this.empployeeDetails.eID,
      employeeName: this.empployeeDetails.name,
      employeeEmail: this.empployeeDetails.email,
      experience: `${this.empployeeDetails.experience}`,
    });
  }

  onReset() {
    this.employeeName?.reset(this.empployeeDetails.name);
    this.employeeEmail?.reset(this.empployeeDetails.email);
    this.experience?.reset(`${this.empployeeDetails.experience}`);
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      // console.log('valid form');
      this.editEvent.emit({
        eID: this.employeeId?.value,
        name: this.employeeName?.value,
        email: this.employeeEmail?.value,
        experience: this.experience?.value,
      });
      this.successCondition = true;
      this.successMessage = `Modified Employee ID: ${this.employeeId?.value} successfully.`;
    }
  }
}
