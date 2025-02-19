import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import { CategoriesComponent } from './components/manage/categories/categories.component';
import { CategoryFormComponent } from './components/manage/category-form/category-form.component';
import { HomeComponent } from './components/home/home.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrandsComponent } from './components/manage/brands/brands.component';
import { BrandFormComponent } from './components/manage/brand-form/brand-form.component';
import { ProductsComponent } from './components/manage/products/products.component';
import { ProductFormComponent } from './components/manage/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
// import {routes} from './app-routing.module'
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryFormComponent,
    HomeComponent,
    BrandsComponent,
    BrandFormComponent,
    ProductsComponent,
    ProductFormComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, 
    RouterLink, 
    FormsModule,  
    ReactiveFormsModule,
    MatSelectModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideZoneChangeDetection({eventCoalescing:true}),
    // provideRouter(routes),
    HttpClient,
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
