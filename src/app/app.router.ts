import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { LoginComponent } from './login/login.component';
import { BlankLayoutComponent } from './layout/blankLayout.component';
import { AdminComponent } from './admin/admin.component';

export const mainRoutes: Routes = [
        { path: '', redirectTo: 'admin', pathMatch: 'full' },
        {
                path: '', component: MainComponent,
                children: [
                  { path: 'admin', component: AdminComponent }
                ]
              },
        {
                path: '', component: BlankLayoutComponent,
                children: [
                        { path: 'login', component: LoginComponent }
                ]
        }];


