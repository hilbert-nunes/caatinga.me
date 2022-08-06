import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Tree } from 'src/app/shared/models/Tree'
import { Response } from 'src/app/shared/models/Response'

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {}

  returnTrees(): Observable<Response<Tree[]>> {
    return this.http.get<Response<Tree[]>>(
      `${this.apiUrl}/api/v1/caatinga/trees`
    )
  }
}
