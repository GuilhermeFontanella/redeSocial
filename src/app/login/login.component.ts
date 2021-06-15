import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../guards/auth-guard.service';
import { UsuarioLogado } from '../models/usuario.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //login!: Usuario;
  loginUsuario?: UsuarioLogado[] = [];

  user?: UsuarioLogado;

  id: number = 0; 
  nome: string = ''; 
  sobrenome: string = ''; 
  dataNascimento: string = '';
  genero: string = ''; 
  email: string = ''; 
  nomeUsuario: string = ''; 
  fotoPerfil: string = ''

  senha: string = '';

  constructor(
    private router: Router,
    private service: LoginService,
    private auth: AuthGuardService,
    ) { }

  ngOnInit(): void {
        
  }

  getLogin(usuario: any) {
    if(this.email && this.senha) {
    
      this.service.getLogin().subscribe((result) => {
        this.loginUsuario = result.filter(x => x.email === usuario);
        this.user = this.loginUsuario[0];
        console.log(this.user.nomeUsuario);

        this.nome = this.user.nome;
        this.id = this.user.id; 
        this.sobrenome = this.user.sobrenome; 
        this.dataNascimento = this.user.dataNascimento;
        this.genero = this.user.genero; 
        this.email = this.user.email;
        this.nomeUsuario = this.user.nomeUsuario;
        this.fotoPerfil = this.user.fotoPerfil;
        
        this.setSessionStorage();
        return this.user;
      })
      this.router.navigate(['/home']);
      this.service.showMessage("Usuário logado com sucesso!")
    } else {
      console.error('Erro no sistema');
      this.service.showMessage("Erro! usuário ou senha incorretos.")
    }    
  }

  cadastro() {
    this.router.navigate(['/cadastro']);
  }

  setSessionStorage() {
    window.localStorage.setItem('nome', this.nome);
    window.localStorage.setItem('id', this.id.toString());
    window.localStorage.setItem('sobrenome', this.sobrenome);
    window.localStorage.setItem('dataNascimento', this.dataNascimento);
    window.localStorage.setItem('genero', this.genero);
    window.localStorage.setItem('email', this.email); 
    window.localStorage.setItem('nomeUsuario', this.nomeUsuario);
    window.localStorage.setItem('fotoPerfil', this.fotoPerfil);
  }


}

