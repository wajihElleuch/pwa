// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {OnlineOfflineService} from './online-offline.service';
// import Dexie from 'dexie';
// import {User} from '../app.component';
// import {delay, map, retryWhen, take, tap} from 'rxjs/operators';
// import {from, of} from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private db: any;
//
//   constructor(private  httpClient: HttpClient, private readonly onlineOfflineService: OnlineOfflineService) {
//     this.registerToEvents(onlineOfflineService);
//     this.createDatabase();
//   }
//
//   private registerToEvents(onlineOfflineService: OnlineOfflineService) {
//     onlineOfflineService.connectionChanged.subscribe(online => {
//       if (online) {
//         console.log('went online');
//         console.log('sending all stored items');
//         this.sendItemsFromIndexedDb();
//       } else {
//         console.log('went offline, storing in indexdb');
//       }
//     });
//   }
//
//   // public getUsers() {
//   //   if (!this.onlineOfflineService.isOnline) {
//   //     return from(this.db.list_user.toArray());
//   //   } else {
//   //
//   //     this.db.list_user.clear();
//   //     // this.db.delete();
//   //     // this.createDatabase();
//   //     return this.httpClient.get('https://app-paw.herokuapp.com/users').pipe(
//   //       map(value => value),
//   //       tap((x: any[]) => {
//   //         for (const a of x) {
//   //           this.db.list_user.add(a).then(async () => {
//   //             const allItems: User[] = await this.db.users.toArray();
//   //             console.log('saved in list user', allItems);
//   //
//   //           });
//   //         }
//   //
//   //       })
//   //     );
//   //   }
//   //
//   // }
//
//   private getItem() {
//     const allItems: User[] = this.db.users.toArray();
//
//     return allItems;
//   }
//
//   public updateUser(user) {
//     if (!this.onlineOfflineService.isOnline) {
//       this.addToIndexedDb(user);
//       this.db.list_user.put(user).then();
//     }
//     return this.httpClient.put(`https://app-paw.herokuapp.com/users/edit`, user);
//   }
//
//   private createDatabase() {
//     this.db = new Dexie('MyTestDatabase');
//     this.db.version(1).stores({
//       users: 'id,firstName,lastName,Selected'
//
//     });
//     this.db.version(2).stores({
//       list_user: 'id,firstName,lastName,Selected'
//     });
//   }
//
//   private addToIndexedDb(user: User) {
//     this.db.users
//       .put(user)
//       .then(async () => {
//         const allItems: User[] = await this.db.users.toArray();
//         console.log('saved in DB, DB is now', allItems);
//       })
//       .catch(e => {
//         alert('Error: ' + (e.stack || e));
//       });
//   }
//
//   private async sendItemsFromIndexedDb() {
//     const allItems: User[] = await this.db.users.toArray();
//     // this.httpClient.put(`https://app-paw.herokuapp.com/users/edit`, {
//     //   firstName: 'dalidali',
//     //   id: 2,
//     //   lastName: 'jallouli',
//     //   selected: false
//     // }).pipe(
//     //   retryWhen(errors => errors.pipe(delay(1000), take(10)))
//     // ).subscribe(value => console.log(value));
//
//     allItems.forEach((item: User) => {
//       console.log(item);
//       this.httpClient.put(`https://app-paw.herokuapp.com/users/edit`, item).pipe(
//         retryWhen(errors => errors.pipe(delay(1000), take(10)))
//       ).subscribe(value => console.log(value));
//       this.db.users.delete(item.id).then(() => {
//         console.log(`item ${item} sent and deleted locally`);
//       });
//     });
//   }
//
// }
