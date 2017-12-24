import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from '../app/auth/token.interceptor';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { FormsModule } from '@angular/forms';
import { HttpModule, } from '@angular/http';
import { AuthService } from './auth/auth.service';
import { ShareLibModule } from './shared/shared-lib.module';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './layout/main/main.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginModule } from './login/login.module';
import { BlankLayoutComponent } from './layout/blankLayout.component';
import { AppComponent } from './app.component';
import { mainRoutes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    BlankLayoutComponent,
    MainComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    ShareLibModule,
    LoginModule,
    RouterModule.forRoot(mainRoutes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
