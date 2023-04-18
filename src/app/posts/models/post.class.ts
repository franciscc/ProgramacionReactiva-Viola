export interface IPost {
    userId: number;
    id: number;
    author: string;
    title: string;
}

export default class PostClass implements IPost{
    constructor(
        public userId: number,
        public id: number,
        public author: string,
        public title: string,
    ) {}
}