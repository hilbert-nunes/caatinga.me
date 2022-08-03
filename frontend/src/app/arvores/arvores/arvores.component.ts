import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Arvore } from 'src/app/arvore/model/arvore';
import { ArvoresService } from '../service/arvores.service';

@Component({
  selector: 'app-arvores',
  templateUrl: './arvores.component.html',
  styleUrls: ['./arvores.component.css']
})
export class ArvoresComponent implements OnInit, OnDestroy{

  arvores: Arvore[] = [];
  readonly subscriptions = new Subscription();

  constructor(private arvoresService:ArvoresService, private router: Router) {}

  ngOnInit(): void {
    this.listArvores()
  }

  private listArvores(): void {
    const subscription = this.arvoresService.returnArvores().subscribe((items) => {
      const data = items.data;

      this.arvores = data

    })

    this.subscriptions.add(subscription);
  }

  backToHome(): void {
    this.router.navigateByUrl("/home")
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
