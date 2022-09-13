import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subscription } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Tree } from 'src/app/shared/models/Tree'
import { Response } from 'src/app/shared/models/Response'

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  private apiUrl = environment.apiUrl
  readonly subscriptions = new Subscription()

  constructor(private http: HttpClient) {}

  returnTree(singleName: string): Observable<Response<Tree>> {
    return this.http.get<Response<Tree>>(
      `${this.apiUrl}/v1/tree/name/${singleName}`
    )
  }

  save(tree: Tree): Observable<Response<Tree>> {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('access_token')
    )
    return this.http.post<Response<Tree>>(
      `${this.apiUrl}/v1/tree`,
      tree,
      {
        headers: headers,
      }
    )
  }

  update(tree: Tree): Observable<Response<Tree>> {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('access_token')
    )
    return this.http.put<Response<Tree>>(
      `${this.apiUrl}/v1/tree/${tree.id}`,
      tree,
      {
        headers: headers,
      }
    )
  }

  deleteTree(treeId: number): Observable<Response<Tree>> {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('access_token')
    )
    return this.http.delete<Response<Tree>>(
      `${this.apiUrl}/v1/tree/${treeId}`,
      {
        headers: headers,
      }
    )
  }
}
