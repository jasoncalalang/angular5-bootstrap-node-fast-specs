import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../material/material.module';
import {TileComponent} from './tile.component';
import {ProductModule} from '../services/product.module';

@NgModule({
  declarations: [
    TileComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ProductModule
  ],
  exports: [TileComponent],
  providers: [],
  bootstrap: [TileComponent]
})
export class TileModule {
}
