import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get('https://www.breakingbadapi.com/api/episodes');
    }

    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
    }

    getCharacters(chars) {
         return this.http.get(`https://www.breakingbadapi.com/api/characters?limit=20&offset=${chars}`)
    }

    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
    }

    getQuotes() {
        return this.http.get('https://www.breakingbadapi.com/api/quotes');
    }

    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);
    }

    getDeaths() {
        return this.http.get('https://www.breakingbadapi.com/api/death-count');
    }

    
    getDeath(name) {
        return this.http.get(`https://www.breakingbadapi.com/api/death-count?name=${name}`);
    }

    searchQuote(author){
       return this.http.get(`https://www.breakingbadapi.com/api/quote?author=${author}`);
    }

}
