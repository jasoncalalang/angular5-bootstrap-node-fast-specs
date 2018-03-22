import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './product.service';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule
  ],
  exports: [],
  providers: [ProductService]
})
export class ProductModule {
}
