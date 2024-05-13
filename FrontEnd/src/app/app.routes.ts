import { Routes } from '@angular/router';
import { GeneratePageComponent } from './pages/generate-page/generate-page.component';

export const routes: Routes = [
    { path: 'main', component: GeneratePageComponent },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: '**', redirectTo: '/main'}
];
