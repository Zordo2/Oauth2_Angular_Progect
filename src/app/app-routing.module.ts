import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'auth', component: AuthComponent, pathMatch: 'full'},
  { path: '', redirectTo: "auth", pathMatch: 'full'},
  { path: 'home', redirectTo: "auth", pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
