import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AllMessagesComponent } from './components/all-messages/all-messages.component';
import { CreateMessagesComponent } from './components/create-messages/create-messages.component';
import { MyMessagesComponent } from './components/my-messages/my-messages.component';
import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path:'core', component: CoreComponent, children:[
      {
        path: 'create-messages',
        component: CreateMessagesComponent
      },
      {
        path: 'my-messages',
        component: MyMessagesComponent
      },
      {
        path: 'all-messages',
        component: AllMessagesComponent
      },
      {
        path: '',
        redirectTo: 'core/create-messages',
        pathMatch: 'full'
      }
    ]
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
