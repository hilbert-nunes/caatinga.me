import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {}

  public generateToken(username: string, password: string) {
    const formData = new FormData()
    // append your data
    formData.append('username', username)
    formData.append('password', password)
    console.log(formData)
    return this.http.post(`${this.apiUrl}/login`, formData)
  }
}
