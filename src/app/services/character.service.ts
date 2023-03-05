import { exhaustMap, from, map, Observable, of, Subject, take, tap } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CharacterModel } from '../models/character.model';
import { AuthUserModel } from '../models/authUser.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly URL: string = 'https://developer.webstar.hu/rest/frontend-felveteli/v2/characters/';

  characters$?: Observable<any>;
  token!: string;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.authService.loggedInStatus$.subscribe(
      {
        next: (user: AuthUserModel | null) => {
          if(user){
            const headers = {
              "Applicant-Id": environment.webstar.appId,
              "Content-Type": "application/json",
              "Application-Authorization": user.token
           }
           this.characters$ = from(this.http.get<any>(this.URL, {headers: headers}));
          }
        }
      }
      )
  }

}
