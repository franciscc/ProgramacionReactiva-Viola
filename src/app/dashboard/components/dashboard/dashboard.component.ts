import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/posts/services/posts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataSource: any[] = [];
  displayedColumns = ['id', 'author', 'title'];
  data$ = new Observable<any[]>;

  constructor(
    private _postsService : PostsService
    ) {}
  ngOnInit(): void {
    this.data$ = this._postsService.GetAllPosts()
  }

}

