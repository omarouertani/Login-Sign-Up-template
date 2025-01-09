import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componants/auth/login/login.component';
import { MdpOublieComponent } from './Componants/mdp-oublie/mdp-oublie.component';
import { SignUpComponent } from './Componants/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'mpd-oublie', component: MdpOublieComponent },
  {path: 'sign-up', component: SignUpComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
