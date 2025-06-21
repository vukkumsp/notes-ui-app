import { Routes } from '@angular/router';
import { AllNotesView } from './views/all-notes-view/all-notes-view';
import { LoginView } from './views/login-view/login-view';

export const routes: Routes = [
    { path: '', component: AllNotesView },
    { path: 'login', component: LoginView }, // Placeholder for login view
    { path: 'admin', loadChildren: () => import('./modules/admin.module').then(m => m.AdminModule) }, // Lazy loading admin module
    { path: 'inbox', loadComponent: () => import('./views/inbox-view/inbox-view').then(m => m.InboxView) }, // Lazy loading inbox view
];
