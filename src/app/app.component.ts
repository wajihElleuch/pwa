import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {TodoService} from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'paw';
  update = false;
  todos: any;

  constructor(private updates: SwUpdate, private todoService: TodoService) {
    this.updates.available.subscribe(value => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit(): void {
    this.todoService.getTodo().subscribe(value => {
      this.todos = value;
      console.log(value);
    });
  }
}
