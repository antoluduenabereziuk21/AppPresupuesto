import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { User } from '../../models/userModel';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private URL = 'http://localhost:3000/api/v1/'

  constructor(
    private http: HttpClient,
    ) { }



login(email: string, password: string):Observable<any>{
  return this.http.post(`${this.URL}auth/signin`,{
    email,
    password
  },httpOptions);
}

register(user: User):Observable<any>{
  return this.http.post(`${this.URL}auth/signup`,
  user,
  httpOptions);
}

}
