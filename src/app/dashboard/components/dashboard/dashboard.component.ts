import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PostDetailsComponent } from 'src/app/posts/components/post-details/post-details.component';
import PostClass from 'src/app/posts/models/post.class';
import { PostsService } from 'src/app/posts/services/posts.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit   {
  dataSource = new MatTableDataSource<PostClass>();
  displayedColumns = ['id', 'author', 'title'];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _postsService : PostsService,
    private dialog : MatDialog
    ) {}
    
  ngOnInit(): void {
    this._postsService.GetAllPosts().subscribe(x => this.dataSource = new MatTableDataSource<PostClass>(x));
    // this.dataSource.paginator = this.paginator;
  }

  openPost(row : PostClass): void {
    console.log('open')
    console.log(row);
    const dialogRef = this.dialog.open(PostDetailsComponent, {
        data: {row}
    });
  }

  // ngAfterViewInit() {
  //   this.paginator.page.subscribe(() => {
  //     const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
  //     const endIndex = startIndex + this.paginator.pageSize;
  //     this.dataSource.data = this.dataSource.data.slice(startIndex, endIndex);
  //   });
  // }

}

