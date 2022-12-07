import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validationForm: FormGroup;

  constructor() {
    this.validationForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
  }

  get firstName(): AbstractControl {
    return this.validationForm.get('firstName')!;
  }

  get lastName(): AbstractControl {
    return this.validationForm.get('lastName')!;
  }
}
