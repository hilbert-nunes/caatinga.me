import { Component, OnInit } from '@angular/core';
import { Arvore } from 'src/app/arvore/model/arvore';
import { ArvoresService } from '../service/arvores.service';

@Component({
  selector: 'app-arvores',
  templateUrl: './arvores.component.html',
  styleUrls: ['./arvores.component.css']
})
export class ArvoresComponent implements OnInit {

  arvores: Arvore[] = [];

  constructor(private arvoresService:ArvoresService) {}

  ngOnInit(): void {
    this.arvores = this.arvoresService.listArvores()
  }

}
