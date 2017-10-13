import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { SharedModule } from './../../../shared/shared.module';

import { MediaComponent } from './components/media.component';

export const routes:Routes = [
    {
        path:'',component:MediaComponent
    }
];

@NgModule({
    imports: [
    SharedModule,
	RouterModule.forChild(routes)],
    exports: [],
    declarations: [MediaComponent],
    providers: [],
})
export class MediaModule { }
