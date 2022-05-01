import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterLoginComponent } from 'app/register/register.component';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  loading = false;
  hide = true;

  constructor(
    private dialog: MatDialog, 
    private dialogRef: MatDialogRef<LoginComponent>, 
    public router: Router, 
    private authService: AuthService) { }

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

  onSignOut() {
    this.dialog.open(RegisterLoginComponent);
  }

  async onSignIn() {
    this.loading = true;
    if (!this.signInForm.valid) {
      return;
    }

    const { email, password } = this.signInForm.value;
    await this.authService.signIn(email, password).subscribe(() => {
      this.router.navigateByUrl('/home/dashboard');
    });

  }
}
