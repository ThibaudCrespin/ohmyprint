import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  products: any;

  constructor() {
  }

  ngOnInit() {
    this.products = [
      {
        'id': 2,
        'title': 'Affiche',
        'category': 1,
        'format': '60x100',
        'price': '20',
        'description': 'Faciles à créer, difficiles à oublier.\n' +
        '• Affichez vos posters personnalisés sur vos murs, portes et vitrines.\n' +
        '• Nombreuses tailles disponibles pour faire les choses en grand, en petit, ou entre les deux. \n' +
        '• Choisissez une finition mate ou glacée pour un rendu qui vous correspond.',
        'picture': 'https://www.printimmo.com/documents/images/general_photos/impression-banderole-sur-mesure-20.jpg'
      }
    ];
  }

}
