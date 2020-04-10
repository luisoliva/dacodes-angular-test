import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {StatisticsPageComponent} from './pages/statistics-page/statistics-page.component';
import {PlayersPageComponent} from './pages/players-page/players-page.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'statistics' ,
        component: StatisticsPageComponent
    },
    {
        path: 'players',
        component: PlayersPageComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
