import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../guards/auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  estaLogado: boolean = false;

  constructor(
    private auth: AuthGuardService,
    private router: Router
    ) {
    
   }

  ngOnInit(): void {
    this.estadoLogado()
  }

  estadoLogado() {
    if(!this.auth.isAuthenticated) {
      console.log(this.estaLogado)
      return this.estaLogado = true;
    } else {
      return this.estaLogado = false;
    }
  }

  logout() {
    //this.estaLogado = false;
    this.router.navigate(['/login']);
  }

}
