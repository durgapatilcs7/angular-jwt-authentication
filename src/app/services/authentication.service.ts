﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') }
    
    login(username: string, password: string) {
        return this.http.post<any>(`localhost:8080/token/generate-token`, { username, password },this.options)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    console.log('Successful');
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}