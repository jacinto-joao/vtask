import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HelperService } from './helper.service';

@Injectable()
export class MediaService {

    constructor(private http:HttpClient,
        private helper:HelperService) { }

    getMedia(){
        return this.http.get<any>(this.helper.api)
            .catch(this.helper.errorHandler);
    }
}