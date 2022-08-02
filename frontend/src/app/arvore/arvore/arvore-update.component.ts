import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Arvore } from '../model/arvore';
import { ArvoreService } from '../service/arvore.service';

@Component({
  templateUrl: './arvore-update.component.html',
  styleUrls: ['./arvore-update.component.css']
})
export class ArvoreUpdateComponent implements OnInit, OnChanges{

  arvore!: Arvore;

  arvoreUpdateForm!: FormGroup

  constructor(private arvoreService:ArvoreService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.returnArvore()
    this.arvoreUpdateForm = new FormGroup({
      singleName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]),
      family: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]),
      botanicalName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]),
      popularName: new FormControl(''),
      nameMeaning: new FormControl(''),
      generalDescription: new FormControl('', [Validators.required, Validators.minLength(100), Validators.maxLength(10000)]),
      specialDescription: new FormControl(''),
      whereOccurs: new FormControl(''),
      ecologicalInfo: new FormControl(''),
      phenologicalInfo: new FormControl(''),
      propagation: new FormControl(''),
      managementGuide: new FormControl(''),
      utilities: new FormControl(''),
      culturalImportance: new FormControl(''),
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  returnArvore() {
    const singleName = String(this.route.snapshot.paramMap.get('singleName'))
    this.arvoreService.returnArvore(singleName).subscribe({

      next: item => this.arvore = item.data,
      error: err => console.log(err)

    })
  }

  get singleName(){
    return this.arvoreUpdateForm.get('singleName')!
  }
  get family(){
    return this.arvoreUpdateForm.get('family')!
  }
  get botanicalName(){
    return this.arvoreUpdateForm.get('botanicalName')!
  }
  get popularName(){
    return this.arvoreUpdateForm.get('popularName')!
  }
  get nameMeaning(){
    return this.arvoreUpdateForm.get('nameMeaning')!
  }
  get generalDescription(){
    return this.arvoreUpdateForm.get('generalDescription')!
  }
  get specialDescription(){
    return this.arvoreUpdateForm.get('specialDescription')!
  }
  get whereOccurs(){
    return this.arvoreUpdateForm.get('whereOccurs')!
  }
  get ecologicalInfo(){
    return this.arvoreUpdateForm.get('ecologicalInfo')!
  }
  get phenologicalInfo(){
    return this.arvoreUpdateForm.get('phenologicalInfo')!
  }
  get propagation(){
    return this.arvoreUpdateForm.get('propagation')!
  }
  get managementGuide(){
    return this.arvoreUpdateForm.get('managementGuide')!
  }
  get utilities(){
    return this.arvoreUpdateForm.get('utilities')!
  }
  get culturalImportance(){
    return this.arvoreUpdateForm.get('culturalImportance')!
  }

  update():void {

    if(this.arvoreUpdateForm.invalid) {
      alert('Formulário inválido')
      return;
    }

    this.arvoreService.update(this.arvore).subscribe({
      next: arvoreParam => {console.log('saved with success', arvoreParam), this.router.navigate(['home'])},
      error: err => console.log(err)
    })
  }

}
