import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PessoaloginComponent } from './pags/pessoalogin/pessoalogin.component';

export const routes: Routes = [
    {path:"", component: HomeComponent },
    { path:"login", component: PessoaloginComponent}

]