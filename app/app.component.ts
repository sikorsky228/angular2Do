import { Component } from '@angular/core';

class Todo{
    title: string;
    completed: boolean;

    constructor(title: string, completed: boolean = false){
        this.title = title;
        this.completed = completed;
    }
}

const todos = [
    {
        title: 'Выучить Angular 2',
        completed: true
    },
    {
        title: 'Вскрыться',
        completed: true
    },
    {
        title: '...',
        completed: true
    },
    {
        title: 'Profit',
        completed: false
    }
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.components.css']
})
export class AppComponent{
    title = "Angular 2do";
    todos = todos;
    newTodoTitle: string = '';

    create(){
        let todo: Todo = new Todo(this.newTodoTitle);
        this.todos.push(todo);
    }

    toggle(todo:any){
        todo.completed = !todo.completed;
    }
    delete(todo:any){
        let index = this.todos.indexOf(todo);

        if(index > -1){
            this.todos.splice(index, 1);
        }
    }
}