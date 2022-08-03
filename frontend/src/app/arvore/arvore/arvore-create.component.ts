import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/image/image.service';
import { Arvore } from '../model/arvore';
import { ArvoreService } from '../service/arvore.service';

@Component({
  templateUrl: './arvore-create.component.html',
  styleUrls: ['./arvore-create.component.css']
})
export class ArvoreCreateComponent implements OnInit{

  arvore: Arvore

  arvoreCreateForm!: FormGroup
  selectedFileTop: any;
  selectedFileLeft: any;
  selectedFileRight: any;

  constructor(private arvoreService:ArvoreService,
     private imageServiceTop:ImageService,
     private imageServiceRight:ImageService,
     private imageServiceLeft:ImageService,
     private route: ActivatedRoute,
     private router: Router) {
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

  public onFileChangedImageTop(event: any) {
    //Select File
    this.selectedFileTop = event.target.files[0];
  }

  public onFileChangedImageLeft(event: any) {
    //Select File
    this.selectedFileLeft = event.target.files[0];
  }

  public onFileChangedImageRight(event: any) {
    //Select File
    this.selectedFileRight = event.target.files[0];
  }

  save(): void{

    if(this.arvoreCreateForm.invalid) {
      alert('Formulário inválido')
      return;
    }

    this.arvoreService.save(this.arvore).subscribe({
      next: arvoreParam =>
      {console.log('saved with success', this.arvore)},
      error: err => console.log(err)
    })

    this.imageServiceTop.onUpload(this.selectedFileTop).subscribe({
      next: imageParam => {
        console.log('saved with success', this.selectedFileTop)
      },
      error: err => console.log(err)
    })

    this.imageServiceLeft.onUpload(this.selectedFileLeft).subscribe({
      next: imageParam => {
        console.log('saved with success', this.selectedFileLeft)
      },
      error: err => console.log(err)
    })

    this.imageServiceRight.onUpload(this.selectedFileRight).subscribe({
      next: imageParam => {
        console.log('saved with success', this.selectedFileRight)
      },
      error: err => console.log(err)
    })
  }

}
