import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  public products: any;
  public keyword :string="";
  constructor() {
  }
  ngOnInit() {
    this.products= [

        {"id": 1, "name":"Phone","price":1400},
        {"id": 2 , "name":"Airpods","price":140},
        {"id": 3, "name":"macBook Pro","price":2400},
        {"id": 4, "name":"Imac","price":1900},
        {"id": 5, "name":"macbook Air","price":999}

      ];
  }


  deleteProduct(p: any) {
    let index =this.products.indexOf(p);
    this.products.splice(index,1);

  }

  search() {
this.products= this.products.filter ((p:any)=>p.name.includes(this.keyword));

  }
}
