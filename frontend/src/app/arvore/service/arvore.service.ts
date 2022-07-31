import { Injectable } from '@angular/core';
import { Arvore } from '../model/arvore';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from 'src/app/Response';

@Injectable({
  providedIn: 'root'
})

export class ArvoreService {

  private apiUrl = environment.apiUrl

  constructor( private http: HttpClient ) { }

  returnArvore(singleName: string): Observable<Response<Arvore>> {
    return this.http.get<Response<Arvore>>(`${this.apiUrl}/api/v1/caatinga/tree/name/${singleName}`)
  }

  save(arvore: Arvore): Observable<Response<Arvore>> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("access_token"));
    return this.http.post<Response<Arvore>>(`${this.apiUrl}/api/v1/caatinga/tree`, arvore, {
      headers: headers
    })
  }

  update(arvore: Arvore): Observable<Response<Arvore>> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("access_token"));
    return this.http.put<Response<Arvore>>(`${this.apiUrl}/api/v1/caatinga/tree/${arvore.id}`, arvore, {
      headers: headers
    })
  }

  deleteArvore(arvoreId: number): Observable<Response<Arvore>> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("access_token"));
    return this.http.delete<Response<Arvore>>(`${this.apiUrl}/api/v1/caatinga/tree/${arvoreId}`, {
      headers: headers
    })
  }
}

