import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';
import { CadastroService } from '../services/cadastro.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-speak',
  templateUrl: './speak.component.html',
  styleUrls: ['./speak.component.css']
})
export class SpeakComponent implements OnInit {

  nomeUsuario : string | null = window.localStorage.getItem('nomeUsuario');

  post: Post =  {
    idUsuario: 10,
    usuario: 'guiFontanella',
    foto: '',
    dataPostagem: '',
    conteudo: ''
  }

  constructor(
    private router: Router,
    private service: PostsService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  irParaProfile() {
    this.router.navigate(['/profile']);
  }

  criarPost() {
    this.service.criarPost(this.post).subscribe(() => {
      this.post.dataPostagem = new Date().getDate().toString();
      this.post.conteudo = this.post.conteudo;
      this.router.navigate(['/home']);
      console.log("postou");
    })
  }

  teste() {
    console.log(this.post.conteudo);
  }
}
