import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';

/*Import  Providers | Services*/
import { HelperService } from './services/helper.service';
import { MediaService } from './services/media.service';


@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        MediaService,
        HelperService ],
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
 }
