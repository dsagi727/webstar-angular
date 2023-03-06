import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CharacterModel } from '../models/character.model';
import { AuthUserModel } from '../models/authUser.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly CHARACTERS_URL: string = 'https://developer.webstar.hu/rest/frontend-felveteli/v2/characters/';

  characters$?: Observable<any>;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.authService.loggedInStatus$.subscribe(
      {
        next: (user: AuthUserModel | null) => {
          if(user){
           const headers: any = {
             "Applicant-Id": environment.webstar.appId,
             "Content-Type": "application/json",
             "Application-Authorization": user.token
          }
         this.characters$ = this.getCharacters(headers);
          }
        }
      }
      )
  }

  getCharacters(headers: any): Observable<CharacterModel[]> {
   return this.http.get<CharacterModel[]>(this.CHARACTERS_URL, {headers: headers});
  }

}
