import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Recoverpassword } from './recoverpassword/recoverpassword';

export const routes: Routes = [
    {
        path: '',
        component: Login
    },
    {
        path: 'signup',
        component: Signup
    },
    {
        path: 'recover-password',
        component: Recoverpassword
    }
];
