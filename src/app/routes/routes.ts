/*import Components to be routed*/
import {LayoutsComponent} from './../layouts/layouts.component';

export const routes = [
    {
        path: '',
        component:LayoutsComponent,
        children:[
            {
                path:'',redirectTo: 'media', pathMatch: 'full'
            },
            {
                path:'media',loadChildren:'./pages/media/media.module#MediaModule'
            }
        ]
    }
];