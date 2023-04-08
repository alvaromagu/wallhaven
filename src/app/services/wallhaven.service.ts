import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient, HttpParams} from "@angular/common/http";
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

  search({ page }: { page: number } = { page: 1 }): Observable<WallhavenSearch> {
    const params = new HttpParams({ fromObject: { page, apiKey: this.apiKey, } });
    return this.client.get<WallhavenSearch>(`${this.baseUrl}/search`, {params});
  }
}
