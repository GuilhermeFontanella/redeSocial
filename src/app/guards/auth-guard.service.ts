import { Injectable, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  isAuthenticated: boolean = false;

  constructor() { }  

  canActivate() {
    return this.isAuthenticated;
  }

  canDeactivate() {
    return this.isAuthenticated;
  }

  
  
}
