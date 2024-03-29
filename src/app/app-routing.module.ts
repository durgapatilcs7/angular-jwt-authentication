import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login';

const appRoutes: Routes = [
  {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'login',
      component: LoginComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
