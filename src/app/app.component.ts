import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {UserService} from './services/user.service';

export interface User {
  firstName: string;
  lastName: string;
  selected: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'paw';
  update = false;
  users: any;

  constructor(private updates: SwUpdate, private todoService: UserService) {
    this.updates.available.subscribe(value => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit(): void {
    this.todoService.getUsers().subscribe((value: User[]) => {
      this.users = value;
      console.log(value);
    });
  }

  updateSelected(user: any) {
    if (user.selected) {
      user.selected = false;
      this.todoService.updateUser(user).subscribe(value => console.log(value));
    } else {
      user.selected = true;
      this.todoService.updateUser(user).subscribe(value => console.log(value));
    }
  }
}
