import { Component, OnDestroy, OnInit } from '@angular/core'
import { Tree } from 'src/app/shared/models/Tree'
import { Subscription } from 'rxjs'
import { TreeService } from '../../services/tree.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css'],
})
export class TreeListComponent implements OnInit, OnDestroy {

  filteredTrees: Tree[] = [];
  _trees: Tree[] = []
  _filterBy: string = '';

  readonly subscriptions = new Subscription()

  constructor(private treeService: TreeService, private router: Router) {}

  ngOnInit(): void {
    this.listTrees()
  }

  private listTrees(): void {
    const subscription = this.treeService.returnTrees().subscribe((items) => {
      const data = items.data

      this._trees = data
      this.filteredTrees = this._trees
    })

    this.subscriptions.add(subscription)
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  set filter(value: string){
    this._filterBy = value;

    this.filteredTrees = this._trees.filter((tree: Tree) =>
      tree.singleName.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }

  get filter() {
    return this._filterBy;
  }
}
