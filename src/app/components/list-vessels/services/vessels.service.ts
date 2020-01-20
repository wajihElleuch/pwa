import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VesselsService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllVessels() {
    return this.httpClient.get('https://app-paw.herokuapp.com/vessels');
  }
}
