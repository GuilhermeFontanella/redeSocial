import { Component, OnInit, Output, ViewChild } from '@angular/core';
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
  @ViewChild("modalPerfil", {static: false})
  modalPerfil?: ProfileDialogComponent;

  @Input() autor: any;
  @Input() conteudo: any;
  @Input() post: Post[] = [];

  data: any;

  constructor(public dialog: MatDialog) { }
  
  ngOnInit(): void {       
  }

  openDialog(data: any): void {
    this.data = {post: data};
    this.dialog.open(ProfileDialogComponent, {disableClose: false, hasBackdrop: true})
    //console.log(this.data);
  }
}


