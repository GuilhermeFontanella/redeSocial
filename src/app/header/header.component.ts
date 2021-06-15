import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthGuardService } from '../guards/auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  estaLogado: boolean = false;

  constructor(
    private auth: AuthGuardService,
    private router: Router
    ) {
    
   }

  ngOnInit(): void {
    this.estadoLogado();
    console.log(this.estaLogado);
  }

  ngOnChanges(): void {

  }

  estadoLogado() {
    if(window.localStorage.getItem('id')) {
      this.estaLogado = true;
      return true;
    } else {
      this.estaLogado = false;
      return false;
    }
  }

  logout() {
    this.removeSessionStorage();
    this.router.navigate(['/login']);
  }

  removeSessionStorage() {
    window.localStorage.removeItem('nome');
    window.localStorage.removeItem('id');
    window.localStorage.removeItem('sobrenome');
    window.localStorage.removeItem('dataNascimento');
    window.localStorage.removeItem('genero');
    window.localStorage.removeItem('email'); 
    window.localStorage.removeItem('nomeUsuario');
    window.localStorage.removeItem('fotoPerfil');
  }

}
