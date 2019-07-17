import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CakesService {

  constructor(private _http: HttpClient) { }

  get_cakes() {
    return this._http.get('/cakes')
  }

  get_one_cake(id) {
    return this._http.get('/cakes/' + id)
  }

  bake_cake(ingredients) {
    return this._http.post('/cakes', ingredients)
  }

  make_rating(rating_data, cake_id) {
    return this._http.put(`/cakes/${cake_id}`, rating_data)
  }
}
