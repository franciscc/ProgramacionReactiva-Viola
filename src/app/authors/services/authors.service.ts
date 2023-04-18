import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AuthorClass } from '../models/author.class';
import { Observable, map, of } from 'rxjs';

interface IAuthorsService {
  GetAllAuthors() : Observable<AuthorClass[]>;
  GetAuthor(id: number): AuthorClass;
}

@Injectable({
  providedIn: 'root'
})

export class AuthorsService implements IAuthorsService {

  private _authors: AuthorClass[] = [];
  constructor(private _httpClient : HttpClient) { }

  GetAuthor(id: number): AuthorClass {
    if (this._authors.length == 0) {
      this.GetAllAuthors().subscribe(data => console.log(data));
    }
    return this._authors.find(x => x.id === id)!;
  }
  
  GetAllAuthors(): Observable<AuthorClass[]> {
    return this._httpClient.get<AuthorClass[]>('https://jsonplaceholder.typicode.com/users');
  }

  


}
