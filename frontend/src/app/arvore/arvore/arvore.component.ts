import { Image } from './../../image/model/image';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/image/image.service';
import { Arvore } from '../model/arvore';
import { ArvoreService } from '../service/arvore.service';

@Component({
  selector: 'app-arvore',
  templateUrl: './arvore.component.html',
  styleUrls: ['./arvore.component.css']
})
export class ArvoreComponent implements OnInit{

  arvore!: Arvore;
  image!: Image;

  selectedFile!: File;
  message!: string;
  retrievedImage: any;
  base64Data: any;
  retrievedResponse: any;

  retrievedImageTop: any;
  retrievedImageLeft: any;
  retrievedImageRight: any;


  constructor(private arvoreService:ArvoreService, private imageService:ImageService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.returnArvore()
    console.log('Tentando ngOnInit')
    this.returnImageTop()
    this.returnImageLeft()
    this.returnImageRight()
  }

  returnArvore() {
    const singleName = String(this.route.snapshot.paramMap.get('singleName'))
    this.arvoreService.returnArvore(singleName).subscribe((item) => {
      const data = item.data
      this.arvore = data
    })
  }

  returnImageLeft() {
    const singleName = String(this.route.snapshot.paramMap.get('singleName'))
    this.imageService.getImage(singleName+'Left.jpg').subscribe({
      next: item =>
      {
        console.log('returned with success', item),
        this.retrievedResponse = item,
        this.base64Data = this.retrievedResponse.picByte,
        this.retrievedImageLeft = 'data:image/jpeg;base64,' + this.base64Data
      }, error: err => console.log(err) });
  }

  returnImageRight() {
    const singleName = String(this.route.snapshot.paramMap.get('singleName'))
    this.imageService.getImage(singleName+'Right.jpg').subscribe({
      next: item =>
      {
        console.log('returned with success', item),
        this.retrievedResponse = item,
        this.base64Data = this.retrievedResponse.picByte,
        this.retrievedImageRight = 'data:image/jpeg;base64,' + this.base64Data
      }, error: err => console.log(err) });
  }

  returnImageTop() {
    const singleName = String(this.route.snapshot.paramMap.get('singleName'))
    this.imageService.getImage(singleName+'Top.jpg').subscribe({
      next: item =>
      {
        console.log('returned with success', item),
        this.retrievedResponse = item,
        this.base64Data = this.retrievedResponse.picByte,
        this.retrievedImageTop = 'data:image/jpeg;base64,' + this.base64Data
      }, error: err => console.log(err) });
  }

  delete(){
    console.log('tentando excluir')
    this.arvoreService.deleteArvore(this.arvore.id!).subscribe({
      next: item => {console.log(item), this.router.navigate(['home'])},
      error: err => console.log(err)
    })
  }

}
