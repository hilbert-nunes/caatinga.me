import { Component, OnInit } from '@angular/core';
import { Arvore } from '../model/arvore';
import { ArvoreService } from '../service/arvore.service';

@Component({
  selector: 'app-arvore',
  templateUrl: './arvore.component.html',
  styleUrls: ['./arvore.component.css']
})
export class ArvoreComponent implements OnInit {

  canShowNameMe: boolean = false;
  arvore!: Arvore;

  constructor(private arvoreService:ArvoreService) {
  }

  ngOnInit(): void {
    this.arvore = this.arvoreService.returnArvore();
  }

}
