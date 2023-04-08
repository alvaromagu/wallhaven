import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { SpinnerComponent } from './components/spinner/spinner.component';
import {NgOptimizedImage} from "@angular/common";
import { DaumComponent } from './components/daum/daum.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpinnerComponent,
    DaumComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
