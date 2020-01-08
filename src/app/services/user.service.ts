import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  httpClient: HttpClient) {
  }

  public getUsers() {
    return this.httpClient.get('https://app-paw.herokuapp.com/users');
  }

  public updateUser(user) {
    return this.httpClient.put(`https://app-paw.herokuapp.com/users/edit`, user);
  }
}
