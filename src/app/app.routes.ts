import { Routes } from '@angular/router';
import { tokenGuard } from './guard/token.guard';


export const routes: Routes = [
    { path: 'registro', loadComponent:() => import('./registro/registro.component').then(m => m.RegistroComponent)},
    { path: 'login', loadComponent:() => import('./login/login.component').then(m => m.LoginComponent)},
    { path: 'about', loadComponent:() => import('./about/about.component').then(m => m.AboutComponent)},
    { path: 'home', loadComponent:() => import('./home/home.component').then(m => m.HomeComponent), canActivate: [tokenGuard]},
    { path: 'plants', loadComponent:() => import('./plants/plants.component').then(m => m.PlantsComponent), canActivate: [tokenGuard]},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: '**', loadComponent:() => import('./not-found/not-found.component').then(m => m.NotFoundComponent)}
];
