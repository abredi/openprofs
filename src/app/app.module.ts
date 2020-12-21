import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { PostsChartComponent } from './posts-chart/posts-chart.component';
import {Angular2ImageGalleryModule} from 'angular2-image-gallery';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    SearchComponent,
    PostsComponent,
    MapComponent,
    PostsChartComponent
  ],
  imports: [
    BrowserModule,
    Angular2ImageGalleryModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
