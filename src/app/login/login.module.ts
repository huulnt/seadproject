import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { ShareModule } from '../shared/shared.module';

@NgModule({
    imports: [
        FormsModule,
        ShareModule,
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
