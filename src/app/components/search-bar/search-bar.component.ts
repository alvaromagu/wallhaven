import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

export interface SearchForm {
  search: FormControl<string | null>;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Input() form!: FormGroup<SearchForm>;
  @Output() submit = new EventEmitter<void>();

  handleSubmit() {
    this.submit.emit();
  }
}
