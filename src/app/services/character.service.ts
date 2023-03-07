import { map, Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CharacterModel } from '../models/character.model';
import { AuthUserModel } from '../models/authUser.model';
import { CharacterModelList } from '../models/apiCharacterList.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly CHARACTERS_URL: string = 'https://developer.webstar.hu/rest/frontend-felveteli/v2/characters/';

  characters$!: Observable<CharacterModel[]>;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.authService.loggedInStatus$.subscribe(
      {
        next: (user: AuthUserModel | null) => {
          if(user){
          const headers= new HttpHeaders()
          .set('content-type', 'application/json')
          .set('Applicant-Id', environment.webstar.appId)
          .set('Application-Authorization', user.token);

          this.characters$ =  this.getCharacters(headers).pipe(
          map((result: CharacterModelList) =>  result.characters),
          tap((chars: CharacterModel[]) => chars))
         }
        }
      }
    )
  }

  getCharacters(headers: HttpHeaders): Observable<CharacterModelList> {
   return this.http.get<CharacterModelList>(this.CHARACTERS_URL, {headers: headers});
  }


}

