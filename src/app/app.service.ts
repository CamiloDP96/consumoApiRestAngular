import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answer } from './models/anwer.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  apiUrl = 'URL_DE_TU_API';

  constructor(private _http: HttpClient) { }

  obtenerRespuesta() {
    return this._http.get<Answer>(this.apiUrl);
  }
}
