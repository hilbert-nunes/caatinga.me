import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  redirect(route: string){
    if (route === 'home'){
      this.router.navigate(['/home'])
    } else if (route === 'list') {
      this.router.navigate(['/arvores'])
    } else {
      this.router.navigate(['/api'])
    }
  }

}
