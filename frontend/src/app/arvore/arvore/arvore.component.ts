import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Arvore } from '../model/arvore';
import { ArvoreService } from '../service/arvore.service';

@Component({
  selector: 'app-arvore',
  templateUrl: './arvore.component.html',
  styleUrls: ['./arvore.component.css']
})
export class ArvoreComponent implements OnInit{

  arvore!: Arvore;

  constructor(private arvoreService:ArvoreService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.returnArvore()
  }

  returnArvore() {
    const singleName = String(this.route.snapshot.paramMap.get('singleName'))
    this.arvoreService.returnArvore(singleName).subscribe((item) => {

      const data = item.data

      this.arvore = data

    })
  }

  delete(){
    console.log('tentando excluir')
    this.arvoreService.deleteArvore(this.arvore.id!).subscribe({
      next: item => console.log(item),
      error: err => console.log(err)
    })
  }

}
