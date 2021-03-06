import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { SearchCocktailsComponent } from './component/search-cocktails/search-cocktails.component';
import { ManagementMaterialsComponent } from './component/management-materials/management-materials.component';
import { ManagementCocktailsComponent } from './component/management-cocktails/management-cocktails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchCocktailsComponent,
    ManagementMaterialsComponent,
    ManagementCocktailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
