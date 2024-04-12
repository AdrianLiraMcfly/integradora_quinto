import { Routes } from '@angular/router';
import { tokenGuard } from './guard/token.guard';
import { activeGuard } from './guard/active.guard';
import { AdminGuard } from './guard/admin.guard';


export const routes: Routes = [
    { path: 'registro', loadComponent:() => import('./registro/registro.component').then(m => m.RegistroComponent)},
    { path: 'login', loadComponent:() => import('./login/login.component').then(m => m.LoginComponent)},
    { path: 'about', loadComponent:() => import('./about/about.component').then(m => m.AboutComponent)},
    { path: 'home', loadComponent:() => import('./home/home.component').then(m => m.HomeComponent), canActivate: [ activeGuard, tokenGuard]},
    { path: 'plants', loadComponent:() => import('./plants/plants.component').then(m => m.PlantsComponent), canActivate: [tokenGuard, activeGuard]},
    { path: 'plant/:id', loadComponent:() => import('./plant/plant.component').then(m => m.PlantComponent), canActivate: [tokenGuard, activeGuard]},
    { path: 'users', loadComponent:() => import('./users/users.component').then(m => m.UsersComponent), canActivate: [tokenGuard, activeGuard, AdminGuard]},
    { path: 'sensors', loadComponent:() => import('./sensors/sensors.component').then(m => m.SensorsComponent), canActivate: [tokenGuard, activeGuard, AdminGuard]},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: '**', loadComponent:() => import('./not-found/not-found.component').then(m => m.NotFoundComponent)},
];
