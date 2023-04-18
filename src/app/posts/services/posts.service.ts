import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import Post from '../models/post.class';
import { AuthorsService } from 'src/app/authors/services/authors.service';

interface IPostsService {
  GetAllPosts(): Observable<Post[]>;
}

@Injectable({
  providedIn: 'root'
})

export class PostsService implements IPostsService{

  constructor(
    private _client : HttpClient,
    private _authorService: AuthorsService
    ) { }

  GetAllPosts(): Observable<Post[]> {
    const response = this._client.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      map(list => (
        list.map(x => ({
          id: x.id,
          userId: x.userId,
          author: 'name',
          title: x.title
        }))
      ))
    );
    
    return response;
  }

}
