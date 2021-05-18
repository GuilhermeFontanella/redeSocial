import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-speak',
  templateUrl: './speak.component.html',
  styleUrls: ['./speak.component.css']
})
export class SpeakComponent implements OnInit {

  post: Post =  {
    idUsuario: 0,
    nomeUsuario: '',
    fotoUsuario: '',
    dataPostagem: '',
    conteudoPost: ''
  }

  constructor(
    private router: Router,
    private service: PostsService
    ) { }

  ngOnInit(): void {
  }

  irParaProfile() {
    this.router.navigate(['/profile']);
  }

  criarPost() {
    this.service.criarPost(this.post).subscribe(() => {
      this.post.dataPostagem = new Date().toDateString();
    })
  }

  teste() {
    console.log(this.post.conteudoPost);
  }
}
