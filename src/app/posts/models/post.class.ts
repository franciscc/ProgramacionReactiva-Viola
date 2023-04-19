export default class PostClass {
    constructor(
        public userId: number,
        public id: number,
        public author: string,
        public title: string,
        public body: string
    ) {}
}