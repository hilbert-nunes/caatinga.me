import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeListTreeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirect(singleName: string): void {
    if ( singleName != 'trees' )
      this.router.navigate([`/arvore/${singleName}`])
    else
      this.router.navigate([`/arvores`])
  }
}
