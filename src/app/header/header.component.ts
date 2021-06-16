import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';
import { AuthGuardService } from '../guards/auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() userLoginState: boolean = false;

  constructor(
    private auth: AuthGuardService,
    private router: Router
    ) {
    
   }

  ngOnInit(): void {
  }

  estadoLogado() {
    if(window.localStorage.getItem('id')) {
      return true;
    } else {
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
