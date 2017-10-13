import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';

import { LayoutsComponent } from './layouts.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [SharedModule],
    exports: [],
    declarations: [
        LayoutsComponent,
        HeaderComponent,
        FooterComponent],
    providers: [],
})
export class LayoutsModule { }
