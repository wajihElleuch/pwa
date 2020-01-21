/* tslint:disable:triple-equals */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OnlineOfflineService} from '../../../services/online-offline.service';
import Dexie from 'dexie';
import {User} from '../../../app.component';
import {delay, filter, map, retryWhen, take, tap} from 'rxjs/operators';
import {Vessel} from '../../../models/vessel.model';
import {from, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VesselsService {
  private db: any;

  constructor(private httpClient: HttpClient, private readonly onlineOfflineService: OnlineOfflineService) {
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
        console.log('went offline, storing in indexdb server');
      }
    });
  }

  private createDatabase() {
    this.db = new Dexie('vesselDB');
    this.db.version(1).stores({
      vesselList: 'id,name,HTA,icon,details'
    });
    this.db.version(2).stores({
      vesselToUpdate: 'id,name,HTA,icon,details'
    });
  }

  public getAllVessels() {
    if (!this.onlineOfflineService.isOnline) {
      return from(this.db.vesselList.toArray());
    } else {

      this.db.vesselList.clear();
      // this.db.delete();
      // this.createDatabase();
      return this.httpClient.get('https://app-paw.herokuapp.com/vessels').pipe(
        map(value => value),
        tap((x: any[]) => {
          for (const a of x) {
            this.db.vesselList.add(a).then(async () => {
              const allItems: Vessel[] = await this.db.vesselList.toArray();
              console.log('saved in list vessel', allItems);

            });
          }

        })
      );
    }
    // return this.httpClient.get('https://app-paw.herokuapp.com/vessels');
  }

  getVesselById(id) {
    if (!this.onlineOfflineService.isOnline) {
      // console.log(this.db.vesselList);
      // this.db.vesselList.toArray().then(value => {
      //   console.log(value);
      //
      // });

      return from(this.db.vesselList.toArray()).pipe(
        map((value: any[]) => {
          return value.find(value1 => {
            return value1.id == id;
          });
        })
      );
    } else {

      // this.db.vesselList.clear();
      // this.db.delete();
      // this.createDatabase();
      return this.httpClient.get(`https://app-paw.herokuapp.com/vessels/${id}`);
    }
  }
  updateVessel(vessel) {
    if (!this.onlineOfflineService.isOnline) {
      this.db.vesselToUpdate.put(vessel);
      this.db.vesselList.put(vessel);
      return from(this.db.vesselList.toArray());
    } else {
      return this.httpClient.put(`https://app-paw.herokuapp.com/edit/vessel`, vessel);
    }
  }

  private async sendItemsFromIndexedDb() {
    const allItems: Vessel[] = await this.db.vesselToUpdate.toArray();
    // this.httpClient.put(`https://app-paw.herokuapp.com/users/edit`, {
    //   firstName: 'dalidali',
    //   id: 2,
    //   lastName: 'jallouli',
    //   selected: false
    // }).pipe(
    //   retryWhen(errors => errors.pipe(delay(1000), take(10)))
    // ).subscribe(value => console.log(value));

    allItems.forEach((item: Vessel) => {
      console.log(item);
      this.httpClient.put(`https://app-paw.herokuapp.com/edit/vessel`, item).pipe(
        retryWhen(errors => errors.pipe(delay(1000), take(10)))
      ).subscribe(value => console.log(value));
      this.db.vesselToUpdate.delete(item.id).then(() => {
        console.log(`item ${item} sent and deleted locally`);
      });
    });
  }
}
