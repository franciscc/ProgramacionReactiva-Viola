export interface IAuthor {
    id: number;
    name: string;
    username: string;
}

export class AuthorClass implements IAuthor {
    constructor(
        public id: number,
        public name: string,
        public username: string
    ) {}
}
