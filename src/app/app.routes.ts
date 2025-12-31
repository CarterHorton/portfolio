import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { LoginForm } from './components/login-form/login-form';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
    },
    {
        path: 'super-cool-admin',
        component: LoginForm
    }
];
