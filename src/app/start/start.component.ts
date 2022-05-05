import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  hide1 = true;
  hide2 = true;
  hide3 = true;

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  signUpForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required)
  });

  constructor(
    public router: Router,
    public firebaseSerice: FirebaseService
  ) {   }

  openApp() {
    this.router.navigateByUrl('/home/dashboard');
  }

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

  enableSubmitBtn1() {
    return this.signInForm.valid;
  }

  enableSubmitBtn2() {
    return this.signUpForm.valid;
  }

  get password1(): AbstractControl {
    return this.signUpForm.controls['password1'];
  }
  
  get password2(): AbstractControl {
    return this.signUpForm.controls['password2'];
  }

  onPasswordChange() {
    if (this.password2.value == this.password1.value) {
      this.password2.setErrors(null);
    } else {
      this.password2.setErrors({ mismatch: true });
    }
  }

}