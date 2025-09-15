import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/admin/cadastro/cadastro';
import { Lista } from './pages/admin/lista/lista';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home'
    },
    {
        path: 'login',
        component: Login,
        title: 'Login'
    },

    {
        path: 'admin/cadastro',
        component: Cadastro,
        title: 'Cadastro'
    },

    {
        path: 'admin/lista',
        component: Lista,
        title: 'Lista'
    }

];

