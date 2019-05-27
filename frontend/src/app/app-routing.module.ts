import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AddstationComponent } from './components/addstation/addstation.component';
import { InfostationComponent } from './components/infostation/infostation.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './components/home/home.module#HomePageModule' },
  { path: 'station', component: InfostationComponent},
  {path: 'add_station', component: AddstationComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
