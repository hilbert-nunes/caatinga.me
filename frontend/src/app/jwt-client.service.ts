import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  private apiUrl = environment.apiUrl

  constructor(private http:HttpClient) { }

  public generateToken( username: string, password: string){
    //const headers = new Headers();
    //headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //let body = `username=${username}&password=${password}`;
    //return this.http.post(this.loginUrl, body, { headers: headers }).map(...);
    //return this.http.post("http://localhost:8080/login", body);

    const formData = new FormData();
    // append your data
    formData.append('username', username);
    formData.append('password', password);
    console.log(formData)
    return this.http.post(`${this.apiUrl}/login`, formData);
  }

}
