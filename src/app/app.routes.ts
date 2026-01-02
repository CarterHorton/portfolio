import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { LoginForm } from './components/login-form/login-form';
import { DevPage } from './pages/dev-page/dev-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
    },
    {
        path: 'dev',
        component: DevPage
    },
    {
        path: 'super-cool-admin',
        component: LoginForm
    }
];
