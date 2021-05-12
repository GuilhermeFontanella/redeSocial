import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from '../guards/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    //private auth: AuthGuardService,
    ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.router.navigate(['/home']);
    //console.log(this.auth.canActivate())
    
  }

  cadastro() {
    this.router.navigate(['/cadastro']);
  }

}
