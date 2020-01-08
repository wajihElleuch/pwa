import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OnlineOfflineService} from './online-offline.service';
import Dexie from 'dexie';
import {User} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private db: any;

  constructor(private  httpClient: HttpClient, private readonly onlineOfflineService: OnlineOfflineService) {
    this.registerToEvents(onlineOfflineService);
    this.createDatabase();
  }

  private registerToEvents(onlineOfflineService: OnlineOfflineService) {
    onlineOfflineService.connectionChanged.subscribe(online => {
      if (online) {
        console.log('went online');
        console.log('sending all stored items');
        this.sendItemsFromIndexedDb();
      } else {
        console.log('went offline, storing in indexdb');
      }
    });
  }

  public getUsers() {
    return this.httpClient.get('https://app-paw.herokuapp.com/users');
  }

  public updateUser(user) {
    if (!this.onlineOfflineService.isOnline) {
      this.addToIndexedDb(user);
    }
    return this.httpClient.put(`https://app-paw.herokuapp.com/users/edit`, user);
  }

  private createDatabase() {
    this.db = new Dexie('MyTestDatabase');
    this.db.version(1).stores({
      users: 'id,firstName,lastName,Selected'
    });
  }

  private addToIndexedDb(user: User) {
    this.db.users
      .put(user)
      .then(async () => {
        const allItems: User[] = await this.db.users.toArray();
        console.log('saved in DB, DB is now', allItems);
      })
      .catch(e => {
        alert('Error: ' + (e.stack || e));
      });
  }

  private async sendItemsFromIndexedDb() {
    const allItems: User[] = await this.db.users.toArray();

    allItems.forEach((item: User) => {
      this.httpClient.put(`https://app-paw.herokuapp.com/users/edit`, item).subscribe(value => console.log(value));
      this.db.users.delete(item).then(() => {
        console.log(`item ${item} sent and deleted locally`);
      });
    });
  }

}
