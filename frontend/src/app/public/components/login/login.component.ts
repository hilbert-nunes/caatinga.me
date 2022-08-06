import { TokenService } from '../../../core/services/token.service'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  user: any = { username: '', password: '' }
  readonly subscriptions = new Subscription()


  constructor(private service: TokenService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    console.log(JSON.stringify(this.user))
    let resp = this.service.generateToken(
      this.user.username,
      this.user.password
    )
    const subscription = resp.subscribe({
      next: (item) => {
        const token = JSON.parse(JSON.stringify(item)).access_token
        localStorage.setItem('access_token', token)
        console.log(localStorage.getItem('access_token'))
        this.router.navigate(['home'])
      },
      error: (err) => {
        console.error('Erro ao fazer o login: {}', err)
      },
    })

    this.subscriptions.add(subscription)
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
