import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StartComponent } from './start/start.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: StartComponent},
  { path: 'dashboard', component: DashboardComponent, outlet: "details"},
  { path: 'user', component: UserComponent, outlet: "details"},
  { path: 'user/:id', component: UserDetailComponent, outlet: "details"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
