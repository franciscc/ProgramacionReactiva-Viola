import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDialogModule
  ],
  exports: [
    PostDetailsComponent
  ]
})
export class PostsModule { }
