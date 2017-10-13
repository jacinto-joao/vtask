import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/*Import App Modules*/
import { SharedModule } from '../shared/shared.module';

/*import routes*/
import {routes} from './routes';

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        SharedModule
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class RoutesModule { }
