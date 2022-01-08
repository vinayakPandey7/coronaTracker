import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from "@angular/common/http";
import { map, Observable, pipe, tap } from "rxjs";

import { CovidData } from "../interface/covid-data";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getData(): Observable<CovidData> {
    return this.http.get<CovidData>(`${this.API_URL}`).pipe(
      map((allData: any) => {
        return allData;
      })
    );
  }
}
