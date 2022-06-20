import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Arvore } from '../model/arvore';
import { ArvoreService } from '../service/arvore.service';

@Component({
  templateUrl: './arvore-update.component.html',
  styleUrls: ['./arvore-update.component.css']
})
export class ArvoreUpdateComponent implements OnInit, OnChanges{

  arvore!: Arvore;

  constructor(private arvoreService:ArvoreService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.returnArvore()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.returnArvore()
  }

  returnArvore() {
    const singleName = String(this.route.snapshot.paramMap.get('singleName'))
    this.arvoreService.returnArvore(singleName).subscribe({

      next: item => this.arvore = item.data,
      error: err => console.log(err)

    })
  }


  update():void {
    this.arvoreService.update(this.arvore).subscribe({
      next: arvoreParam => console.log('saved with success', arvoreParam),
      error: err => console.log(err)
    })
  }

}
