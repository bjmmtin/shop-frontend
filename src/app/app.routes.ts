import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { 
        path: '',
        component: HomeComponent,
    },
    {
        path: 'about-us',
        loadChildren: async ()=>{
            const m = await import('./modules/about-us/about-us-routing.module');
            return m.AboutUsRoutingModule;
        }
    }
];
