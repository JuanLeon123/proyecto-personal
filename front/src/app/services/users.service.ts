import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/register';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    url = 'http://localhost:4000/api/';
    constructor(private http: HttpClient) { }

    postUsers(user: Usuario): Observable<any>{
        return this.http.post(`${this.url}/register-user`, user)
    }
}
