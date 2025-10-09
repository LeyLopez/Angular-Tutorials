import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Recoverpassword } from './recoverpassword/recoverpassword';
import { Home } from './home/home';
import { Tutors } from './tutors/tutors';
import { Disponibility } from './disponibility/disponibility';
import { Profile } from './profile/profile';
import { Reservations } from './reservations/reservations';
import { Details } from './details/details';
import { Records } from './records/records';
import { Mytutorials } from './mytutorials/mytutorials';

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
    },
    {
        path: 'edit-profile',
        component: Profile
    },
    {
        path: "reservations",
        component: Reservations
    },
    {
        path: "subject-details",
        component: Details
    },
    {
        path: "user-records",
        component: Records
    },
    {
        path: "my-tutorials",
        component: Mytutorials
    }
];
