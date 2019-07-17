import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CakesService {

  constructor(private _http: HttpClient) {}

  get_cakes() {
    return this._http.get('/cakes')
  }

  get_one_cake(id){
    return this._http.get('/cakes/' + id)
  }

  bake_cake(ingredients) {
    return this._http.post('/cakes', ingredients)
  }
}
