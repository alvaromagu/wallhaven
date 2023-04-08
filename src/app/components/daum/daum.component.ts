import {Component, Input} from '@angular/core';
import {Daum} from "../../types/wallhaven";

@Component({
  selector: 'app-daum',
  templateUrl: './daum.component.html',
  styleUrls: ['./daum.component.css']
})
export class DaumComponent {
  @Input() daum!: Daum;
}
