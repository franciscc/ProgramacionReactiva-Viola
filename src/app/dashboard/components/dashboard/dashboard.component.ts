import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Post from 'src/app/posts/models/post.class';
import { PostsService } from 'src/app/posts/services/posts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataSource: Post[] = [];
  displayedColumns = ['id', 'author', 'title'];

  constructor(
    private _postsService : PostsService
    ) {}
  ngOnInit(): void {
    this._postsService.GetAllPosts().subscribe(x => this.dataSource = x);
  }

}

