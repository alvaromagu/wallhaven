import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {finalize, Subject, take, takeUntil} from "rxjs";
import {WallhavenService} from "../../services/wallhaven.service";
import {Wallpaper} from "../../types/wallpaper";

@Component({
  selector: 'app-thumbnail',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.css']
})
export class WallpaperComponent implements OnDestroy {
  wallpaper?: Wallpaper;
  loading = true;
  private unSubscribe: Subject<void> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private wallhavenService: WallhavenService,
  ) {
    this.route.params.pipe(
      takeUntil(this.unSubscribe)
    ).subscribe({
      next: value => {
        const {id} = value;
        if (typeof id !== 'string') {
          return;
        }
        this.loadDumb(id);
      }
    })
  }

  ngOnDestroy() {
    this.unSubscribe.complete();
  }

  private loadDumb(id: string) {
    this.wallhavenService.get(
      id
    ).pipe(
      take(1),
      finalize(() => this.loading = false),
    ).subscribe({
      next: value => {
        this.wallpaper = value;
      }, error: err => {
        console.log(err)
      }
    })
  }
}
