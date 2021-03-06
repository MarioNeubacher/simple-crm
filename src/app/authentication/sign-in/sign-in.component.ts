import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'app/services/firebase.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-start',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

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
    public firebaseSerice: FirebaseService,
    public authService: AuthService
  ) {   }

  enableSubmitBtn1() {
    return this.signInForm.valid;
  }

  enableSubmitBtn2() {
    return this.signUpForm.valid;
  }

  //for openPasswordChange()
  get password1(): AbstractControl {
    return this.signUpForm.controls['password1'];
  }
  
  get password2(): AbstractControl {
    return this.signUpForm.controls['password2'];
  }

  onPasswordChange() {
    if (this.password2.value == this.password1.value) {
      this.password2.setErrors(null);
      this.password1.setErrors(null);
    } else {
      this.password2.setErrors({ mismatch: true });
      this.password1.setErrors({ mismatch: true });
    }
  }

}