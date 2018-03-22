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
    const url = 'http://www.mocky.io/v2/5ab2fbd22e00003d044cc37f';
    this.fetch(url);
  }

  fetch (url) {
    this.productService.fetch(url).subscribe(response => {
      this.products = response.products;
    });
  }


}
