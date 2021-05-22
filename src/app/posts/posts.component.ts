import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  post: Post[] = [];
  postAutor!: string;
  postConteudo!: any;
  teste = 'guilherme'

  constructor(
    public dialog: MatDialog,
    private service: PostsService
  ) { }

  

  openDialog() {
    this.dialog.open(ProfileDialogComponent, {disableClose: false, hasBackdrop: true})
  }

  ngOnInit(): void {
    this.buscarListaDePosts();
    console.log(this.postConteudo)
  }

  buscarListaDePosts(): void {
    this.service.retornarPosts().subscribe(post => {
      this.post = post;         
    })
  }

  defineConteudoDePosts() {
    this.service.retornarPosts().subscribe(result => {
      this.postConteudo = result.forEach(result => result.conteudo)
    })
  }
}


