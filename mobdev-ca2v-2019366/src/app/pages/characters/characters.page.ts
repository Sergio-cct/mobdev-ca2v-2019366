import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

    characters = [];
    offset = 0;
    numCharacters = 63;

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {

        this.loadCharacters();
    }

    openMore(event?) {

        this.offset = this.offset + 20;
        this.loadCharacters(event);

        if (this.offset > this.numCharacters) {
            event.target.disabled = true;
        }
    }

    loadCharacters(event?) {

        this.api.getCharacters(this.offset).subscribe(data => {

            console.log(data);
            this.characters = this.characters.concat(data);

            if (event) {
                event.target.complete();
            }
        })
    }



    openDetails(character) {
        let characterId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    }
}
