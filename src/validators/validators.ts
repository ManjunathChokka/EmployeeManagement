import { AbstractControl, ValidationErrors } from '@angular/forms';

export function experienceV(control: AbstractControl): ValidationErrors | null {
  //get the value from control
  //convert into number
  const v = +control.value;

  if (control.value === '') {
    return { isError: true, msg: 'Please enter experience.' };
  }
  //if not number
  if (isNaN(v)) {
    return { isError: true, msg: 'should be a number' };
  }

  //if value less than 0
  if (v <= 0) {
    return {
      isError: true,
      msg: 'should have at least 1 year of experience',
    };
  }

  //if value greater than 30
  if (v > 30) {
    return {
      isError: true,
      msg: 'should have not exceed more than 30 years of experience',
    };
  }

  return null;
}
