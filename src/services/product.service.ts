import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}


  // Promise
  // ==============
  // fetch(url): Promise<any> {
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   return this.http.get(
  //     url, {
  //       headers: headers
  //     }
  //   ).toPromise();
  // }
  // Observable
  // ==============
  fetch(url): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(
      url, {
        headers: headers
      }
    );
  }
}
