import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Tree } from 'src/app/shared/models/Tree'
import { TreeService } from '../../services/tree.service'
import { Subscription } from 'rxjs'


@Component({
  templateUrl: './update-tree.component.html',
  styleUrls: ['./update-tree.component.css'],
})
export class UpdateTreeComponent implements OnInit, OnDestroy {
  tree: Tree

  treeUpdateForm!: FormGroup

  readonly subscriptions = new Subscription()


  constructor(
    private treeService: TreeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.tree = {
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
    this.returnTree()
    this.treeUpdateForm = new FormGroup({
      singleName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(32),
      ]),
      family: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(32),
      ]),
      botanicalName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(32),
      ]),
      popularName: new FormControl(''),
      nameMeaning: new FormControl(''),
      generalDescription: new FormControl('', [
        Validators.required,
        Validators.minLength(100),
        Validators.maxLength(10000),
      ]),
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

  returnTree() {
    const singleName = String(this.route.snapshot.paramMap.get('singleName'))
    const subscriptionOne = this.treeService.returnTree(singleName).subscribe({
      next: (item) => (this.tree = item.data),
      error: (err) => console.log(err),
    })
    this.subscriptions.add(subscriptionOne)
  }

  get singleName() {
    return this.treeUpdateForm.get('singleName')!
  }
  get family() {
    return this.treeUpdateForm.get('family')!
  }
  get botanicalName() {
    return this.treeUpdateForm.get('botanicalName')!
  }
  get popularName() {
    return this.treeUpdateForm.get('popularName')!
  }
  get nameMeaning() {
    return this.treeUpdateForm.get('nameMeaning')!
  }
  get generalDescription() {
    return this.treeUpdateForm.get('generalDescription')!
  }
  get specialDescription() {
    return this.treeUpdateForm.get('specialDescription')!
  }
  get whereOccurs() {
    return this.treeUpdateForm.get('whereOccurs')!
  }
  get ecologicalInfo() {
    return this.treeUpdateForm.get('ecologicalInfo')!
  }
  get phenologicalInfo() {
    return this.treeUpdateForm.get('phenologicalInfo')!
  }
  get propagation() {
    return this.treeUpdateForm.get('propagation')!
  }
  get managementGuide() {
    return this.treeUpdateForm.get('managementGuide')!
  }
  get utilities() {
    return this.treeUpdateForm.get('utilities')!
  }
  get culturalImportance() {
    return this.treeUpdateForm.get('culturalImportance')!
  }

  update(): void {
    if (this.treeUpdateForm.invalid) {
      alert('Formulário inválido')
      return
    }

    const subscriptionTwo = this.treeService.update(this.tree).subscribe({
      next: (arvoreParam) => {
        console.log('saved with success', arvoreParam),
          this.router.navigate(['home'])
      },
      error: (err) => console.log(err),
    })
    this.subscriptions.add(subscriptionTwo)

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
