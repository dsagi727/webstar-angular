import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { CharacterService } from './../../../services/character.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharacterModel } from 'src/app/models/character.model';


@Component({
  selector: 'app-select-character-page',
  templateUrl: './select-character-page.component.html',
  styleUrls: ['./select-character-page.component.scss']
})
export class SelectCharacterPageComponent implements OnInit, OnDestroy {


  charactersList!: CharacterModel[];
  selectedCharacter?: CharacterModel;
  characterSubs?: Subscription;

  constructor(private characterService: CharacterService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.characterSubs = this.characterService.characters$?.subscribe(
      (chars: CharacterModel[]) => {
        this.charactersList = chars;
        this.selectedCharacter = this.charactersList[0];
      }
    )
  }

  ngOnDestroy (): void {
    this.characterSubs?.unsubscribe();
  }

  pagerRight(): void {
    if(this.selectedCharacter !== undefined){
      let i = this.charactersList.indexOf(this.selectedCharacter);

      if(i === this.charactersList.length - 1){
        this.selectedCharacter = this.charactersList[0]
      }else{
        this.selectedCharacter = this.charactersList[i+1]
      }
    }
  }

  pagerLeft(): void {
    if(this.selectedCharacter !== undefined){
      let i = this.charactersList.indexOf(this.selectedCharacter);

      if(i === 0){
        this.selectedCharacter = this.charactersList[this.charactersList.length-1]
      }else{
        this.selectedCharacter = this.charactersList[i-1]
      }
    }
  }


}
