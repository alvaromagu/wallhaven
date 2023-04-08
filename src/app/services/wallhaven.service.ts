import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WallhavenService extends BaseService {
  constructor(
    private client: HttpClient
  ) {
    super();
  }

  search(): Observable<any> {
    return this.client.get(`${this.baseUrl}/search?apiKey=${this.apiKey}`);
  }
}
