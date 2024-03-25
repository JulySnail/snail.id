import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortraitComponent } from './portrait/portrait.component';

export const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'portrait', component: PortraitComponent}
];
