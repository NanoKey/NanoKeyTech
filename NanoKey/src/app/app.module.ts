import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import {Http, HttpModule} from '@angular/http'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RecaptchaModule } from 'angular-google-recaptcha';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ImagesliderComponent } from './imageslider/imageslider.component';

import {} from './interfaces/image';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TempSearchComponent } from './temp-search/temp-search.component';
import { ExecutiveSearchComponent } from './executive-search/executive-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Services', 
    component: ServicesComponent, 
    children: [      
          { path: 'TempSearch', component: TempSearchComponent },
          { path: 'ExecutiveSearch', component: ExecutiveSearchComponent }
        ]      
  },
  { path: 'Contact', component: ContactComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    ImagesliderComponent,
    HomeComponent,
    FooterComponent,
    TempSearchComponent,
    ExecutiveSearchComponent
  ],
  imports: [
    FormsModule ,
    ReactiveFormsModule,
    RecaptchaModule.forRoot({
      siteKey: '6LdGf4EUAAAAANqtgLnw3OG6fwgcxkbCoqbfcflf',
  }),
    BrowserModule,HttpClientModule,HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
