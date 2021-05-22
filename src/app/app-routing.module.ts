import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { LojaComponent } from './loja/loja.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { 
    path: 'home', 
    canActivate: [AuthGuardService],
    component: HomeComponent 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'cadastro', 
    component: CadastroComponent 
  },
  { 
    path: 'loja', 
    component: LojaComponent 
  },
  { 
    path: 'profile', 
    component: ProfileComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
