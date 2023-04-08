import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Daum, Wallhaven} from "../types/wallhaven";
import {Wallpaper} from "../types/wallpaper";

@Injectable({
  providedIn: 'root'
})
export class WallhavenService extends BaseService {
  constructor(
    private client: HttpClient
  ) {
    super();
  }

  search(
    request: SearchParams = { page: 1 }
  ): Observable<Wallhaven> {
    const params = new HttpParams({ fromObject: { ...request, apiKey: this.apiKey, } });
    return this.client.get<Wallhaven>(`${this.baseUrl}/search`, {params});
  }

  get(
    id: string
  ): Observable<Wallpaper> {
    return this.client.get<Wallpaper>(`${this.baseUrl}/w/${id}`);
  }
}

interface SearchParams {
  page: number;
  q?: string;
}
