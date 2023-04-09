import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {SpinnerComponent} from './components/spinner/spinner.component';
import {NgOptimizedImage} from "@angular/common";
import {DaumComponent} from './components/daum/daum.component';
import {TagComponent} from './components/tag/tag.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {ReactiveFormsModule} from "@angular/forms";
import {WallpaperComponent} from './components/wallpaper/wallpaper.component';
import {HeartComponent} from './components/icons/heart/heart.component';
import {EyeComponent} from './components/icons/eye/eye.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpinnerComponent,
    DaumComponent,
    TagComponent,
    SearchBarComponent,
    WallpaperComponent,
    HeartComponent,
    EyeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
