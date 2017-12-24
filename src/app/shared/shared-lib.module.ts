import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DatatableComponent } from './datatable/datatable.component';
import { DialogComponent } from './dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
    ],
    exports: [
        FormsModule,
        HttpModule,
        CommonModule,
        HttpClientModule
    ],
    declarations: [DatatableComponent, DialogComponent]
})
export class ShareLibModule { }
