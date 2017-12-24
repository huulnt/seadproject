import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import { ShareLibModule } from '../shared/shared-lib.module';
import { AuthService } from '../auth/auth.service';

@NgModule({
    imports: [
        FormsModule,
        ShareLibModule,
        RouterModule
    ],
    declarations: [
        LoginComponent
    ],
    entryComponents: [],
    providers: [
        LoginService,
        AuthService
    ]
})
export class LoginModule { }
