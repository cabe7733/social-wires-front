import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMessagesComponent } from './components/all-messages/all-messages.component';
import { CreateMessagesComponent } from './components/create-messages/create-messages.component';
import { MyMessagesComponent } from './components/my-messages/my-messages.component';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@NgModule({
  declarations: [
    CreateMessagesComponent,
    MyMessagesComponent,
    AllMessagesComponent,
    CoreComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
