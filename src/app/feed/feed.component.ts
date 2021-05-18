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

  posts!: Post[];

  idUsuario = 0;
  nomeUsuario = '';
  fotoUsuario = '';
  dataPostagem = '';
  conteudoPost = '';

  constructor(
    private service: PostsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.buscarListaDePosts();
    console.log(this.posts)
  }

  buscarListaDePosts(): void {
    this.service.retornarPost().subscribe(posts => {
      this.posts = posts;
      console.log(posts)
    })
  }

  openDialog() {
    this.dialog.open(ProfileDialogComponent, {disableClose: false, hasBackdrop: true})
  }


}
