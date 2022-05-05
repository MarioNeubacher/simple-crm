import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './dashboard/user-detail/user-detail.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { AuthGuard } from './authentication/services/auth.guard';
import { HomeComponent } from './dashboard/dashboard.component';
import { UserComponent } from './dashboard/user/user.component';
import { VerifyEmailComponent } from './authentication/verify-email/verify-email.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: SignInComponent},
  { path: 'register-user', component: SignUpComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'dashboard/home', component: HomeComponent},
  { path: 'dashboard/user', component: UserComponent},
  { path: 'dashboard/user/:id', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }