import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { MyErrorStateMatcher } from './MyErrorStateMatcher ';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  hide1 = true;
  hide2 = true;
  hide3 = true;

  matcher = new MyErrorStateMatcher();

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password1').value;
    let confirmPass = group.get(signUpForm['controls']['password2']).value
    return pass === confirmPass ? null : { notSame: true }
  }

  signUpForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required)
  }, { validators: this.checkPasswords });

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
}