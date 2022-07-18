import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { experienceV } from 'src/validators/validators';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  employeeForm;
  @Output() addEvent = new EventEmitter();
  successCondition = false;
  successMessage = '';

  constructor(private formBuilder: FormBuilder) {
    this.employeeForm = this.formBuilder.group({
      employeeId: [`e${this.generateId()}`],
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

  ngOnInit(): void {}
  //getters
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

  onReset() {
    this.employeeName?.reset('');
    this.employeeEmail?.reset('');
    this.experience?.reset('');
  }
  onSubmit() {
    if (this.employeeForm.valid) {
      // console.log('valid form');
      this.addEvent.emit({
        eID: this.employeeId?.value,
        name: this.employeeName?.value,
        email: this.employeeEmail?.value,
        experience: this.experience?.value,
      });
      this.successCondition = true;
      this.successMessage = `Saved employee details for ID: ${this.employeeId?.value}. Please add next Employee Details.`;
      this.onReset();
      this.employeeForm.patchValue({
        employeeId: `e${this.generateId()}`,
      });
    }
  }
  generateId(): number {
    return Math.floor(Math.random() * 90000) + 10000;
  }
}
