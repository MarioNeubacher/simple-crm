import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { CustomErrorStateMatcher } from './custom-state-matcher';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  hide1 = true;
  hide2 = true;
  hide3 = true;

  /* customErrorStateMatcher = new CustomErrorStateMatcher;

  signInForm: FormGroup; */

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

 /*  signUpForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  }); */

  constructor(
    public router: Router,
    public firebaseSerice: FirebaseService/* ,
    private fb: FormBuilder */
  ) { 
   /*  this.signInForm = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    }) */
  }

  ngOnInit(): void {
    
  }

  openApp() {
    this.router.navigateByUrl('/home/dashboard');
  }

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

  enableSubmitBtn() {
    return this.signInForm.valid;
  }

}