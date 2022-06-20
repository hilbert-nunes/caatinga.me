import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Arvore } from '../model/arvore';
import { ArvoreService } from '../service/arvore.service';

@Component({
  templateUrl: './arvore-create.component.html',
  styleUrls: ['./arvore-create.component.css']
})
export class ArvoreCreateComponent implements OnInit, OnChanges{

  arvore: Arvore

  constructor(private arvoreService:ArvoreService, private route: ActivatedRoute) {
    this.arvore = {
      singleName: '',
      popularName: '',
      family: '',
      botanicalName: '',
      nameMeaning: '',
      generalDescription: '',
      specialDescription: '',
      whereOccurs: '',
      ecologicalInfo: '',
      phenologicalInfo: '',
      propagation: '',
      managementGuide: '',
      utilities: '',
      culturalImportance: '',
    }
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  save(): void{
    this.arvoreService.save(this.arvore).subscribe({
      next: arvoreParam => console.log('saved with success', this.arvore),
      error: err => console.log(err)
    })
  }

}
