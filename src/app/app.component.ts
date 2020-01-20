import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
// import {UserService} from './services/user.service';
import {fader, slider} from './animation/routeAnimation';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  selected: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider
    // fader
  ]
})
export class AppComponent implements OnInit {
  title = 'paw';
  update = false;
  users: any[];

  constructor(private updates: SwUpdate) {
    this.updates.available.subscribe(value => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit(): void {
    // this.todoService.getUsers().subscribe((value: User[]) => {
    //   this.users = value;
    //
    // });
  }

  // updateSelected(user: any) {
  //   if (user.selected) {
  //     user.selected = false;
  //     this.users.splice(this.users.indexOf(user), 1, user);
  //     this.todoService.updateUser(user).subscribe(value => console.log(value));
  //   } else {
  //     user.selected = true;
  //     this.users.splice(this.users.indexOf(user), 1, user);
  //     this.todoService.updateUser(user).subscribe(value => console.log(value));
  //   }
  // }

  prepareRoute(outlet: any) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
