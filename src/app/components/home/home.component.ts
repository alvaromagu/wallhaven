import {Component, OnInit} from '@angular/core';
import {WallhavenService} from "../../services/wallhaven.service";
import {finalize, take} from "rxjs";
import {Daum} from "../../types/wallhaven";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SearchForm} from "../search-bar/search-bar.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup<SearchForm> = new FormGroup({
    search: new FormControl<string | null>('', Validators.required)
  });
  daums: Daum[] = [];
  loading = false;
  private page = 1;

  constructor(
    private wallhavenService: WallhavenService
  ) {}

  ngOnInit(): void {
    this.loadThumbs();
  }

  loadThumbs({reset}: {reset?: boolean} = {}) {
    this.loading = true;
    this.wallhavenService.search({
      page: this.page,
      q: this.form.value.search ?? undefined,
    }).pipe(
      take(1),
      finalize(() => this.loading = false)
    ).subscribe({
      next: value => {
        if (reset) {
          this.daums = value.data;
          return;
        }

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

  handleSubmit() {
    this.loadThumbs({reset: true});
  }
}
