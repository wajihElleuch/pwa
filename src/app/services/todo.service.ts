import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private  httpClient: HttpClient) {
  }

  public getTodo() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
  }

  public updateTodo(id, selectedChange) {
    return this.httpClient.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {selected: selectedChange});
  }
}
