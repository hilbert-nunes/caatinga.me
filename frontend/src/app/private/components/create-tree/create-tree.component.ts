import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Tree } from 'src/app/shared/models/Tree'
import { TreeService } from '../../services/tree.service'
import { Subscription } from 'rxjs'

@Component({
  templateUrl: './create-tree.component.html',
  styleUrls: ['./create-tree.component.css'],
})
export class CreateTreeComponent implements OnInit, OnDestroy {
  tree: Tree

  treeCreateForm!: FormGroup

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
    this.treeCreateForm = new FormGroup({
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
      generalDescription: new FormControl('', [
        Validators.required,
        Validators.minLength(100),
        Validators.maxLength(10000),
      ]),
    })
  }

  get singleName() {
    return this.treeCreateForm.get('singleName')!
  }
  get family() {
    return this.treeCreateForm.get('family')!
  }
  get botanicalName() {
    return this.treeCreateForm.get('botanicalName')!
  }
  get generalDescription() {
    return this.treeCreateForm.get('generalDescription')!
  }

  save(): void {
    if (this.treeCreateForm.invalid) {
      alert('Formulário inválido')
      return
    }

    const subscription = this.treeService.save(this.tree).subscribe({
      next: (treeParam) => {
        console.log('saved with success', this.tree),
          this.router.navigate([`${'home'}`])
      },
      error: (err) => console.log(err),
    })
    this.subscriptions.add(subscription)
  }

  returnHome(): void {
    this.router.navigate([`${'home'}`])
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
