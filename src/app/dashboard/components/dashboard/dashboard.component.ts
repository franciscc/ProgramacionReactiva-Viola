import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostDetailsComponent } from 'src/app/posts/components/post-details/post-details.component';
import PostClass from 'src/app/posts/models/post.class';
import { PostsService } from 'src/app/posts/services/posts.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit   {
  dataSource: PostClass[] = [];
  displayedColumns = ['id', 'author', 'title'];

  constructor(
    private _postsService : PostsService,
    private dialog : MatDialog
    ) {}
    
  ngOnInit(): void {
    this._postsService.GetAllPosts().subscribe(x => this.dataSource = x);
  }

  openPost(row : PostClass): void {
    console.log('open')
    console.log(row);
    const dialogRef = this.dialog.open(PostDetailsComponent, {
        data: {row}
    });
  }

}

