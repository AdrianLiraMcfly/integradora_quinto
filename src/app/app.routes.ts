import { Routes } from '@angular/router';
import { tokenGuard } from './guard/token.guard';
import { activeGuard } from './guard/active.guard';
import { AdminGuard } from './guard/admin.guard';
import { istokenGuard } from './guard/istoken.guard';


export const routes: Routes = [
 
    {path:'lifeplants',loadComponent:() => import('./navtwo/navtwo.component').then(m => m.NavtwoComponent),canActivate:[activeGuard,tokenGuard],children:[
        { path: 'about', loadComponent:() => import('./about/about.component').then(m => m.AboutComponent)},
        { path: 'home', loadComponent:() => import('./home/home.component').then(m => m.HomeComponent), canActivate: [ activeGuard, tokenGuard]},
        { path: 'plants', loadComponent:() => import('./plants/plants.component').then(m => m.PlantsComponent), canActivate: [tokenGuard, activeGuard]},
        { path: 'plant/:id', loadComponent:() => import('./plant/plant.component').then(m => m.PlantComponent), canActivate: [tokenGuard, activeGuard]},
        { path: 'users', loadComponent:() => import('./users/users.component').then(m => m.UsersComponent), canActivate: [tokenGuard, activeGuard, AdminGuard]},
        { path: 'sensors', loadComponent:() => import('./sensors/sensors.component').then(m => m.SensorsComponent), canActivate: [tokenGuard, activeGuard, AdminGuard]}, 
        { path: 'perfil', loadComponent:() => import('./profile/profile.component').then(m => m.ProfileComponent),canActivate:[tokenGuard,activeGuard]},
        { path: 'sensoresdatos', loadComponent:() => import('./sensores-datos/sensores-datos.component').then(m => m.SensoresDatosComponent),canActivate:[tokenGuard,activeGuard]},
    ]},

    { path: 'registro', loadComponent:() => import('./registro/registro.component').then(m => m.RegistroComponent),canActivate:[istokenGuard]},
    { path: 'login', loadComponent:() => import('./login/login.component').then(m => m.LoginComponent),canActivate:[istokenGuard]},
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: '**', loadComponent:() => import('./not-found/not-found.component').then(m => m.NotFoundComponent)},
];