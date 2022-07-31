import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtClientService } from '../jwt-client.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:any = { username: '', password: ''}

  constructor(private service:JwtClientService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(JSON.stringify(this.usuario))
    let resp = this.service.generateToken(this.usuario.username, this.usuario.password);
    resp.subscribe(data=>{
      var token = JSON.parse(JSON.stringify(data)).access_token;
      localStorage.setItem("access_token", token)
      console.log(localStorage.getItem("access_token"))
      this.router.navigate(['home'])
    },
      error => {
        console.log("Erro ao fazer o login")
      }
    )
  }

}
