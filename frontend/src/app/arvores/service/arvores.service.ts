import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arvore } from 'src/app/arvore/model/arvore';
import { Response } from 'src/app/Response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArvoresService {

  private apiUrl = environment.apiUrl

  constructor( private http: HttpClient ) { }

  returnArvores(): Observable<Response<Arvore[]>> {

    return this.http.get<Response<Arvore[]>>(`${this.apiUrl}/api/v1/caatinga/trees`)

  }

}
