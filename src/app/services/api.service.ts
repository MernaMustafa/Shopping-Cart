import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private urlAddress: string = environment.urlAddress;
  constructor(private http: HttpClient) {}

  public get = (route: string): Observable<any> => {
    return this.http.get(this.urlAddress + "/" + route, this.generateHeaders());
  };

  public create = (route: string, body): Observable<any> => {
    return this.http.post(
      this.urlAddress + "/" + route,
      body,
      this.generateHeaders()
    );
  };

  public update = (route: string, body): Observable<any> => {
    return this.http.put(
      this.urlAddress + "/" + route,
      body,
      this.generateHeaders()
    );
  };

  public delete = (route: string): Observable<any> => {
    return this.http.delete(this.urlAddress + "/" + route);
  };

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  };
}
