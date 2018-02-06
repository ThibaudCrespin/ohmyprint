import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: any;
  id: string;

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
  }

  getProduct() {
    this.product = {
      "id": 2,
      "title": "Affiche",
      "category": 1,
      "format": "60x100",
      "price": "20",
      "description": "Le tableau est un affichage standard que l'on peut mettre dans n'importe quelle pièce",
      "picture": "http://via.placeholder.com/300x300"
    };
  }

  ngOnInit() {
    this.getProduct();
  }

}
