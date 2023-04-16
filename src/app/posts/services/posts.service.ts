import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface IPostsService {
  GetAllPosts(): Observable<any[]>;
}

@Injectable({
  providedIn: 'root'
})

export class PostsService implements IPostsService{

  constructor(private _client : HttpClient) { }

  GetAllPosts(): Observable<any[]> {
    return this._client.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
