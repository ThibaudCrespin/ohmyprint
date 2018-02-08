import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any;

  constructor() {
    this.products = [
      {
        "id": 1,
        "title": "Panneau Publicitaire",
        "category": 1,
        "format": "60x100",
        "price": "20",
        "description": "Le tableau est un affichage standard que l'on peut mettre dans n'importe quelle pièce",
        "picture": "http://saga-print.fr/images/detailed/0/Panneau_immobilier_600x200_publicitaire.jpg"
      },
      {
        "id": 2,
        "title": "Affiche",
        "category": 1,
        "format": "60x100",
        "price": "20",
        "description": "Le tableau est un affichage standard que l'on peut mettre dans n'importe quelle pièce",
        "picture": "http://via.placeholder.com/300x200"
      },
      {
        "id": 3,
        "title": "Banderole",
        "category": 1,
        "format": "60x100",
        "price": "20",
        "description": "Le tableau est un affichage standard que l'on peut mettre dans n'importe quelle pièce",
        "picture": "https://www.printimmo.com/documents/images/general_photos/impression-banderole-sur-mesure-20.jpg"
      },
      {
        "id": 4,
        "title": "Portrait",
        "category": 1,
        "format": "60x100",
        "price": "20",
        "description": "Le tableau est un affichage standard que l'on peut mettre dans n'importe quelle pièce",
        "picture": "http://via.placeholder.com/300x200"
      },
      {
        "id": 5,
        "title": "Poster",
        "category": 1,
        "format": "60x100",
        "price": "20",
        "description": "Le tableau est un affichage standard que l'on peut mettre dans n'importe quelle pièce",
        "picture": "http://via.placeholder.com/300x200"
      },
      {
        "id": 6,
        "title": "Autocollant",
        "category": 1,
        "format": "60x100",
        "price": "20",
        "description": "Le tableau est un affichage standard que l'on peut mettre dans n'importe quelle pièce",
        "picture": "http://via.placeholder.com/300x200"
      }
    ]
  }

  ngOnInit() {
  }

}
