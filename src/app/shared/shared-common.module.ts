import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ShareLibModule } from './shared-lib.module';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './dialog/dialog.service';

@NgModule({
    imports: [
        ShareLibModule
    ],
    declarations: [
        DialogComponent
    ],
    entryComponents: [
        DialogComponent
    ],
    providers: [
        DialogService,
    ],
    exports: [
        ShareLibModule
    ]
})
export class ShareCommonModule { }
