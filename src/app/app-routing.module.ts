import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
