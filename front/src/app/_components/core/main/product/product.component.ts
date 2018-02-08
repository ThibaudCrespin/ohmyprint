import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: any;
  id: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getProduct() {
    this.product = {
      "id": 2,
      "title": "Affiche",
      "category": 1,
      "format": "60x100",
      "price": "20",
      "description": "Faciles à créer, difficiles à oublier.\n" +
      "• Affichez vos posters personnalisés sur vos murs, portes et vitrines.\n" +
      "• Nombreuses tailles disponibles pour faire les choses en grand, en petit, ou entre les deux. \n" +
      "• Choisissez une finition mate ou glacée pour un rendu qui vous correspond.",
      "picture": "https://www.printimmo.com/documents/images/general_photos/impression-banderole-sur-mesure-20.jpg"
    };
  }

  addToCart() {
    this.router.navigate(['/main/basket']);
  }

  ngOnInit() {
    this.getProduct();
  }

}
