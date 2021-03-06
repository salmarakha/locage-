import { ProductService } from './Services/product.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

/*================================ My Components ==============================*/

import { SideCartComponent } from './SharedComponent/Navbar/Navbar-Component/sideCart/sideCart.component';
import { SubNavbarComponent } from './SharedComponent/Navbar/Navbar-Component/sub-navbar/sub-navbar.component';
import { SearchComponent } from './SharedComponent/Navbar/Navbar-Component/search/search.component';
import { NavbarComponent } from './SharedComponent/Navbar/navbar/navbar.component';
import { HomeComponent } from './HomePage/Home/Home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdvComponent } from './HomePage/Adv/Adv.component';
import { ProductCardComponent } from './SharedComponent/Proudactcard/product-card/product-card.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { ProductContainerComponent } from './HomePage/ProudactContainer/productContainer/productContainer.component';
import { CategoryComponent } from './HomePage/Categories/category/category.component';
import { TopCategoriesComponent } from './HomePage/Categories/top-categories/top-categories.component';
import { FooterComponent } from './SharedComponent/Footer/footer/footer.component';
import { ProudactCardVerticalComponent } from './SharedComponent/Proudactcard/proudact-card-vertical/proudact-card-vertical.component';
import { LayoutProductComponent } from './SharedComponent/proudact-layout-vertical/layout-product/layout-product.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { jwtOptionsFactory } from './helpers/intercerptor/JwtOptions';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { UserService } from './Services/user.service';
import { LoginButtonComponent } from './SharedComponent/Navbar/Navbar-Component/login-button/login-button.component';
import { ProfileButtonComponent } from './SharedComponent/Navbar/Navbar-Component/profile-button/profile-button.component';
import { TopNavbarComponent } from './SharedComponent/Navbar/Navbar-Component/top-navbar/top-navbar.component';
import { LoginComponent } from './AuthPages/login/login.component';
import { RecoverComponent } from './AuthPages/recover/recover.component';
import { RegisterComponent } from './AuthPages/register/register.component';
import { ResetPasswordComponent } from './AuthPages/reset-password/reset-password.component';
import { CreateStoreComponent } from './Vendor/create-store/create-store.component';
import { StartSellingComponent } from './Vendor/start-selling/start-selling.component';
import { VendorService } from './Services/vendor.service';
import { NotFoundComponent } from './SharedComponent/not-found/not-found.component';
import { CategoryService } from './Services/category.service';
import { TruncatePipe } from './helpers/pipe/truncate.pipe';
import { ProductViewComponent } from './product-view/product-view.component';
import { ImagePreviewComponent } from './product-view/image-preview/image-preview.component';
import { FilterationSidebarComponent } from './SharedComponent/filteration-sidebar/filteration-sidebar.component';
import { SubcategoryPageComponent } from './SubCategoryPage/subcategory-page/subcategory-page.component';
import { AuthGuardService } from './Services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    SubNavbarComponent,
    SideCartComponent,
    AdvComponent,
    HomeComponent,
    ProductCardComponent,
    ProductContainerComponent,
    CategoryComponent,
    TopCategoriesComponent,
    FooterComponent,
    ProudactCardVerticalComponent,
    LayoutProductComponent,
    LoginButtonComponent,
    ProfileButtonComponent,
    TopNavbarComponent,
    LoginComponent,
    RecoverComponent,
    CreateStoreComponent,
    StartSellingComponent,
    NotFoundComponent,
    TruncatePipe,
    ResetPasswordComponent,
    RegisterComponent,
    FilterationSidebarComponent,
    SubcategoryPageComponent,
    ProductViewComponent,
    ImagePreviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
      },
    }),
    NgxWebstorageModule.forRoot({
      prefix: '',
      separator: '',
      caseSensitive: true,
    }),
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    BarRatingModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSliderModule,
  ],
  providers: [
    FormBuilder,
    UserService,
    AuthGuardService,
    VendorService,
    ProductService,
    CategoryService,
  ],
  bootstrap: [AppComponent],
  exports: [TruncatePipe],
})
export class AppModule {}
