import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl = "http://localhost:3001/usuarios";

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
    ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  realizarCadastro(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario)
  }

  editarCadastro(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.baseUrl, usuario);
  }

}
