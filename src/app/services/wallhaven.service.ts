import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WallhavenSearch} from "../types/wallhaven-search";

@Injectable({
  providedIn: 'root'
})
export class WallhavenService extends BaseService {
  constructor(
    private client: HttpClient
  ) {
    super();
  }

  search(): Observable<WallhavenSearch> {
    return this.client.get<WallhavenSearch>(`${this.baseUrl}/search?apiKey=${this.apiKey}`);
  }
}
