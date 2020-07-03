import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectionMatchesService {
  // Base url
  url: string = 'http://localhost:9991/';

   constructor(private http: HttpClient) {}

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // GET
  reqGetAllMatchesList(){
    return this.http.get(this.url+'listofmatches') 
  }

}
