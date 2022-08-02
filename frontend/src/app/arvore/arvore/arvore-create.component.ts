import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Arvore } from '../model/arvore';
import { ArvoreService } from '../service/arvore.service';

@Component({
  templateUrl: './arvore-create.component.html',
  styleUrls: ['./arvore-create.component.css']
})
export class ArvoreCreateComponent implements OnInit, OnChanges{

  arvore: Arvore

  arvoreCreateForm!: FormGroup

  constructor(private arvoreService:ArvoreService, private route: ActivatedRoute, private router: Router) {
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
    this.arvoreCreateForm = new FormGroup({
      singleName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]),
      family: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]),
      botanicalName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]),
      generalDescription: new FormControl('', [Validators.required, Validators.minLength(100), Validators.maxLength(10000)]),
    })
  }

  get singleName(){
    return this.arvoreCreateForm.get('singleName')!
  }
  get family(){
    return this.arvoreCreateForm.get('family')!
  }
  get botanicalName(){
    return this.arvoreCreateForm.get('botanicalName')!
  }
  get generalDescription(){
    return this.arvoreCreateForm.get('generalDescription')!
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  save(): void{

    if(this.arvoreCreateForm.invalid) {
      alert('Formulário inválido')
      return;
    }

    this.arvoreService.save(this.arvore).subscribe({
      next: arvoreParam => {console.log('saved with success', this.arvore), this.router.navigate(['home'])},
      error: err => console.log(err)
    })
  }

}
