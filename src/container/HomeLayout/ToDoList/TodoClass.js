export class Todo {
    constructor(itemText) {
        this.item = itemText;
        this.id = new Date().toISOString();
    }
}
