import {FormControl} from "@angular/forms";

export interface SearchForm {
  page: FormControl<number | null>;
  search: FormControl<string | null>;
  tag: FormControl<string | null>;
}
