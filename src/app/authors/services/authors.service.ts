import { Injectable, OnInit } from '@angular/core';
import { AuthorClass } from '../models/author.class';

interface IAuthorsService {
  GetAuthor(id: number): AuthorClass;
}

@Injectable({
  providedIn: 'root'
})

export class AuthorsService implements IAuthorsService {

  private _authors: AuthorClass[] = [];
  constructor() { }

  GetAuthor(id: number): AuthorClass {
    if (this._authors.length == 0) {
      this._authors = this._authors = [
        {
          "id": 1,
          "name": "Barrera Conley",
          "username": "Lizzie"
        },
        {
          "id": 2,
          "name": "Bolton Cooke",
          "username": "Fisher"
        },
        {
          "id": 3,
          "name": "Rosario Osborn",
          "username": "Vinson"
        },
        {
          "id": 4,
          "name": "Schmidt Hogan",
          "username": "Oliver"
        },
        {
          "id": 5,
          "name": "Kelley Roy",
          "username": "Cantrell"
        },
        {
          "id": 6,
          "name": "Beryl Battle",
          "username": "Berger"
        },
        {
          "id": 7,
          "name": "Rosemarie French",
          "username": "Mabel"
        },
        {
          "id": 8,
          "name": "Davis Kerr",
          "username": "Ford"
        },
        {
          "id": 9,
          "name": "Smith Colon",
          "username": "Brittany"
        },
        {
          "id": 10,
          "name": "Judy Hebert",
          "username": "Rivas"
        }
      ]
    }

    const result = this._authors.find(x => x.id == id)!;

    return result;
  }
  

}
