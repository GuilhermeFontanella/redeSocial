import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioLogado } from '../models/usuario.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
    ) { }

  url = 'http://localhost:3000'

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  getLogin(): Observable<UsuarioLogado[]> {
    return this.http.get<UsuarioLogado[]>(`${this.url}/usuarioLogado`);
  }

  getUsuarioLogado(): Observable<UsuarioLogado> {
    return this.http.get<UsuarioLogado>(`${this.url}/usuarioLogado`);
  }
}
