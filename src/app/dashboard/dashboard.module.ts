import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { PostsModule } from '../posts/posts.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    PostsModule,
    MatPaginatorModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
