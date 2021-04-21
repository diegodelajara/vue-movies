
import Login from './pages/Login';
import Home from './pages/Home'
import Details from './pages/Details'

export const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/detalle',
    component: Details,
  }
]