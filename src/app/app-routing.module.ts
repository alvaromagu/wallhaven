import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ThumbnailComponent} from "./components/thumbnail/thumbnail.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'thumbnail/:id', component: ThumbnailComponent }

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
export class AppRoutingModule { }
