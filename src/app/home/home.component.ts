﻿import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../models';
import { UserService } from '../services';


@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
        });
    }
}