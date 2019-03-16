import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { MovieListComponent } from './Movies/movie-list/movie-list.component';
import { MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieItemComponent } from './Movies/movie-item/movie-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoComponentComponent } from './demo-component/demo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavHeaderComponent,
    MovieListComponent,
    DashboardComponent,
    MovieItemComponent,
    DemoComponentComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    NgMatSearchBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
