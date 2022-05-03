import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  hide = true;
  signInForm = FormGroup;

  constructor(
    public router: Router,
    public firebaseSerice: FirebaseService
  ) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
    });
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