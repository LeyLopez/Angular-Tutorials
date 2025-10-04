import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Recoverpassword } from './recoverpassword/recoverpassword';
import { Home } from './home/home';
import { Tutors } from './tutors/tutors';
import { Disponibility } from './disponibility/disponibility';

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
    },{
        path: 'home',
        component: Home
    },
    {
        path: 'tutors',
        component: Tutors
    },
    {
        path: 'disponibilities',
        component: Disponibility
    }
];
