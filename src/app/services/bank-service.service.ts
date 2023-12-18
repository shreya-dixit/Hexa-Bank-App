import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BankServiceService {
  url = "https://1.api.fy23ey06.careers.ifelsecloud.com/";
  constructor(private http: HttpClient) { }
  users() {
    return this.http.get(this.url);
  }
}
