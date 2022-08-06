import { HttpClient } from '@angular/common/http'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { TreeService } from 'src/app/private/services/tree.service'
import { Tree } from 'src/app/shared/models/Tree'
import { Subscription } from 'rxjs'


@Component({
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnInit, OnDestroy {
  tree: Tree

  relativePath: string = 'assets\\img\\trees'
  pathSingleName!: string
  readonly subscriptions = new Subscription()


  constructor(
    private treeService: TreeService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
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
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  ngOnInit(): void {
    this.pathSingleName = String(this.route.snapshot.paramMap.get('singleName'))
    this.returnTree()
  }

  returnTree() {
    const subscription = this.treeService.returnTree(this.pathSingleName).subscribe((item) => {
      const data = item.data
      this.tree = data
    })
    this.subscriptions.add(subscription)
  }
}
