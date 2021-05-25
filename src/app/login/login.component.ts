import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from '../guards/auth-guard.service';
import { CadastroService } from '../services/cadastro.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //login!: Usuario;
  email!: string;
  senha!: string;

  constructor(
    private router: Router,
    private service: CadastroService,
    private auth: AuthGuardService,
    ) { }

  ngOnInit(): void {
  }

  login() {
    if(this.email && this.senha) {
      //this.auth.canActivate();
      this.router.navigate(['/home']);
    } else {
      console.error('Erro no sistema');
    }
  }

  cadastro() {
    this.router.navigate(['/cadastro']);
  }

}

