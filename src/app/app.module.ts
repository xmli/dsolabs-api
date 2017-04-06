import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OrgsComponent } from './orgs/orgs.component';
import { PropublicaComponent } from './propublica/propublica.component';
import { GuidestarComponent } from './guidestar/guidestar.component';

@NgModule({
  declarations: [
    AppComponent,
    OrgsComponent,
    PropublicaComponent,
    GuidestarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
