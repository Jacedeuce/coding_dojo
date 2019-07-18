import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private _http: HttpClient) { }

  get_authors() {
    return this._http.get('/api/authors')
  }

  get_one_author(id) {
    return this._http.get('/api/authors/' + id)
  }

  create_author(new_author){
    return this._http.post('/api/authors', new_author)
  }

  update_author(updated_author){  // verify this is how I want to pass parameters
    return this._http.put('/api/authors/' + updated_author._id, updated_author)
  }

  delete_author(id) {
    return this._http.delete('/api/authors/' + id)
  }
}
