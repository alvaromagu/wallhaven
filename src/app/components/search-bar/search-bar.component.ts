import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {SearchForm} from "../../types/search-form";

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
