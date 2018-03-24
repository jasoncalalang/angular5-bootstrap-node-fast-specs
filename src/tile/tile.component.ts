import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';

/** @title Basic sidenav */
@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styles: [`
    mat-grid-tile {
      background: lightblue;
    }
    .example-card {
      max-width: 400px;
    }

    .example-header-image {
      background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
      background-size: cover;
    }
  `]
})

export class TileComponent implements OnInit {

  products: any[];

  constructor (private productService: ProductService) {
  }

  ngOnInit() {
    const url = 'http://www.mocky.io/v2/5ab5260a3000002b008278f0';
    this.fetch(url);
  }

  fetch (url) {

    // Promise
    // ===============
    // return new Promise((resolve) => {
    //   this.productService.fetch(url).then((result) => {
    //     resolve(result);
    //   });
    // });

    // Observable
    // ===============
    this.productService.fetch(url).subscribe(response => {
      this.products = response.products;
    });
  }


}
