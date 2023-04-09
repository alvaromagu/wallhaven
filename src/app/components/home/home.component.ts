import {Component, OnInit} from '@angular/core';
import {WallhavenService} from "../../services/wallhaven.service";
import {finalize, take} from "rxjs";
import {Daum} from "../../types/wallhaven";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SearchForm} from "../../types/search-form";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup<SearchForm> = new FormGroup({
    page: new FormControl<number | null>(1, Validators.required),
    search: new FormControl<string | null>(''),
    tag: new FormControl<string | null>(''),
    username: new FormControl<string | null>(''),
  });
  daums: Daum[] = [];
  loading = false;
  hasMoreContent = true;

  constructor(
    private wallhavenService: WallhavenService,
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next: value => {
        const {q, tag, username} = value;
        this.form.patchValue({search: q ?? '', tag: tag ?? '', username: username ?? ''});
        this.loadThumbs({reset: true});
      },
      error: err => {
        console.log(err);
      },
    });
  }

  loadThumbs({reset}: { reset?: boolean } = {}) {
    this.loading = true;
    const {page, search, username} = this.form.value;
    if (reset) {
      this.hasMoreContent = true;
      this.daums = [];
    }
    this.wallhavenService.search({
      page: page ?? 1,
      q: search ?? undefined,
      username: username ?? undefined,
    }).pipe(
      take(1),
      finalize(() => this.loading = false)
    ).subscribe({
      next: value => {
        this.hasMoreContent = value.data.length === value.meta.per_page;
        this.daums = [...this.daums, ...value.data];
      },
      error: err => {
        console.log(err);
      }
    });
  }

  handleLoadMore() {
    const page = this.form.value.page!;
    this.form.patchValue({page: page + 1});
    this.loadThumbs();
  }

  handleSubmit() {
    this.router.navigate([''], {queryParams: {q: this.form.value.search}}).then();
  }
}
