import { Injectable } from '@angular/core';
import { Arvore } from '../model/arvore';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Response } from 'src/app/Response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ArvoreService {

  private apiUrl = environment.apiUrl

  constructor( private http: HttpClient ) { }

  returnArvore(singleName: string): Observable<Response<Arvore>> {

    return this.http.get<Response<Arvore>>(`${this.apiUrl}/api/v1/caatinga/tree/name/${singleName}`)
  }
}
