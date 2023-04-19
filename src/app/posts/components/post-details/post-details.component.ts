import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import PostClass from 'src/app/posts/models/post.class';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit{

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }
  post?: PostClass = this.data.row;

  ngOnInit(): void {
    this.post = this.data.row;
  }
}
