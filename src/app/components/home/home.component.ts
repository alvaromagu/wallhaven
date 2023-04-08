import {Component, OnInit} from '@angular/core';
import {WallhavenService} from "../../services/wallhaven.service";
import {finalize, take} from "rxjs";
import {Daum} from "../../types/wallhaven-search";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  daums: Daum[] = [];
  loading = false;
  private page = 1;

  constructor(
    private wallhavenService: WallhavenService
  ) {}

  ngOnInit(): void {
    this.loadThumbs();
  }

  loadThumbs() {
    this.loading = true;
    this.wallhavenService.search({
      page: this.page
    }).pipe(
      take(1),
      finalize(() => this.loading = false)
    ).subscribe({
      next: value => {
        this.daums = [...this.daums, ...value.data];
      },
      error: err => {
        console.log(err);
      }
    });
  }

  handleLoadMore() {
    this.page += 1;
    this.loadThumbs();
  }
}
