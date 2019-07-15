// import { Observable } from "rxjs"
// import { map } from "rxjs/operators"
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

// https://medium.com/@luukgruijs/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3


@Injectable({
  providedIn: 'root'
})




export class PokemonService {

  constructor(private _http: HttpClient) { 
    this.get_other_pokemons()
  }
  getPokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');

    function titleCaseWord(word: string){
      if (!word) return word;
      return word[0].toUpperCase() + word.substr(1)
    }
    function list_abilities(arr) {
      var ability_string: String
      ability_string = arr[0].ability.name
      if (arr.length > 2){
        for (let i=1; i<arr.length-1; i++) {
        ability_string+= ', ' + arr[i].ability.name
        }
      }
      if (arr.length === 2){
        ability_string += " and " + arr[arr.length-1].ability.name
      }
      return ability_string
    }

    bulbasaur.subscribe(data => {
      console.log(`${titleCaseWord(data['name'])}'s abilities are ${list_abilities(data['abilities'])}.`)
    })
    return bulbasaur
  }

  get_other_pokemons(){
    var urls: Array<string>

    function parse_ability_urls(arr) {
      let ability_urls: Array<string> = []
      for (let abil of arr) {
        ability_urls.push(abil.ability.url)
      }
      return ability_urls
    }

    this.getPokemon().subscribe(data => {
      urls = parse_ability_urls(data['abilities'])
      console.log(urls)
      let chlorophyl = this._http.get(urls[0])
      let overgrow = this._http.get(urls[1])

      function parse_pokemons(poke_obj) {
        var poke_arr: Array<string> = []
        for (let poke of poke_obj['pokemon']) {
          if (poke.pokemon.name != 'bulbasaur'){
            poke_arr.push(poke.pokemon.name)
          }
        }
        return poke_arr
      }

      function print_array(arr) {
        let str: String = arr[0]
        for (let i=1; i<arr.length-1; i++) {
          str += ', ' + arr[i]
        }
        str += ' and ' + arr[arr.length-1]
        return str
      }

      function titleCaseWord(word: string){
        if (!word) return word;
        return word[0].toUpperCase() + word.substr(1)
      }

      chlorophyl.subscribe(data => {
        console.log(`${titleCaseWord(data['name'])} is also used by ${print_array(parse_pokemons(data))}.`)
      })
      overgrow.subscribe(data => {
        console.log(`${titleCaseWord(data['name'])} is also used by ${print_array(parse_pokemons(data))}.`)
      })       
    }) 
      
  }
}
