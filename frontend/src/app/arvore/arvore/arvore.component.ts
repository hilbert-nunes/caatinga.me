import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Arvore } from '../model/arvore';
import { ArvoreService } from '../service/arvore.service';

@Component({
  selector: 'app-arvore',
  templateUrl: './arvore.component.html',
  styleUrls: ['./arvore.component.css']
})
export class ArvoreComponent {

  arvore?: Arvore;

  constructor(private arvoreService:ArvoreService, private route: ActivatedRoute) {
    this.returnArvore()
  }

  returnArvore() {
    const singleName = String(this.route.snapshot.paramMap.get('singleName'))
    this.arvoreService.returnArvore(singleName).subscribe((item) => {

      const data = item.data

      this.arvore = data

    })
  }

}
