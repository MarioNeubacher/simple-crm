import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { StartComponent } from './start/start.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: StartComponent},
  { path: 'layout', component: LayoutComponent},
  { path: 'dashboard', component: DashboardComponent, outlet: "tabs"},
  { path: 'user', component: UserComponent, outlet: "tabs"},
  { path: 'user/:id', component: UserDetailComponent, outlet: "tabs"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
