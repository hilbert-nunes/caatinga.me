import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Arvore } from '../model/arvore';
import { ArvoreService } from '../service/arvore.service';

@Component({
  selector: 'app-arvore',
  templateUrl: './arvore.component.html',
  styleUrls: ['./arvore.component.css']
})
export class ArvoreComponent implements OnInit{

  arvore!: Arvore;

  relativePath: string = "assets\\images\\trees";
  pathSingleName!: string;

  constructor(private arvoreService:ArvoreService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {
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
    this.pathSingleName = String(this.route.snapshot.paramMap.get('singleName'))
    this.returnArvore()
  }

  returnArvore() {
    this.arvoreService.returnArvore(this.pathSingleName).subscribe((item) => {
      const data = item.data
      this.arvore = data
    })
  }

  delete(){
    console.log('tentando excluir')
    this.arvoreService.deleteArvore(this.arvore.id!).subscribe({
      next: item => {console.log(item), this.router.navigate(['home'])},
      error: err => console.log(err)
    })
  }

}
