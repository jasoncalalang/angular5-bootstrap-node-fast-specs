import {NgModule} from '@angular/core';
import {MaterialModule} from '../../material/material.module';
import {HeaderComponent} from './header.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
  ],
  exports: [HeaderComponent],
  providers: [],
  bootstrap: [HeaderComponent]
})
export class HeaderModule {
}
