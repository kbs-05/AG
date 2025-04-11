import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-splash-screen',
  standalone:false,
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {
  constructor (
    private router: Router
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/connexion'])
    }, 3000); // 3 secondes
  }
}