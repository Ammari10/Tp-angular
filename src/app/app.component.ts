import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Myapp';

  public currentRoute : any;
 constructor(private router: Router) {
 }

  gotoHome() {
   this . currentRoute ="home"

this.router.navigateByUrl("/home");
  }

  gotoProduct() {
    this.currentRoute="products";
    this.router.navigateByUrl("/products");
  }
}
