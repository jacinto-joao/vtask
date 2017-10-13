import { Component, OnInit } from '@angular/core';

import { MediaService } from './../../../../core/services/media.service';

@Component({
    selector: 've-media',
    templateUrl: 'media.component.html',
    styleUrls:['media.component.scss']
})

export class MediaComponent implements OnInit {
    media:any[] = [];
    constructor(public _media:MediaService) { }

    getMedia(){
        return this._media.getMedia().subscribe(res =>{
            console.log(res);
        });
    }

    ngOnInit() {
        this.getMedia();
     }
}