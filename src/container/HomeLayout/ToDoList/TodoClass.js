export class Todo {
    constructor(itemText, imageFlag, status) {
        this.item = itemText;
        this.id = Date.now();
        this.imageFlag = imageFlag;
        this.status = status;
    }
}

export class TodoImage {
    constructor(id, image) {
        this.image = image;
        this.id = id;
    }
}
