import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';
import { MatDialog } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: Post[] = []
  postAutor!: string;
  postConteudo!: string;

  constructor(
    private service: PostsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.buscarListaDePosts();
    this.defineConteudoDePosts();
  }

  buscarListaDePosts() {
    this.service.retornarPosts().subscribe(result => {
      this.posts = result;
      //console.log(this.posts)
    })
  }

  defineConteudoDePosts() {
    this.service.retornarPosts().subscribe(result => {
      this.posts = result;
      this.posts.forEach(result => {
        this.postConteudo = result.conteudo
        //console.log(this.postConteudo)
      })
      //console.log(this.posts)
    })
  }

  openDialog() {
    this.dialog.open(ProfileDialogComponent, {disableClose: false, hasBackdrop: true})
  }

 
}
