import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { mainRoutes } from '../app.router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
    ],
    exports: [
        SidebarComponent,
        NavbarComponent,
        FooterComponent,
        MainComponent
    ],
    declarations: [
        SidebarComponent,
        NavbarComponent,
        FooterComponent,
        MainComponent
    ]
})
export class LayoutModule { }
