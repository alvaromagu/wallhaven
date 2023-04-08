import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {WallpaperComponent} from "./components/wallpaper/wallpaper.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'wallpaper/:id', component: WallpaperComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
