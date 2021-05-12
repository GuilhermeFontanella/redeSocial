import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  openDialog() {
    this.dialog.open(ProfileDialogComponent, {disableClose: false, hasBackdrop: true})
  }

  ngOnInit(): void {
  }

}


