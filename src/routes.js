import Main from './pages/dashboard/main';
import Products from './pages/dashboard/products';
import RegisterProducts from './pages/dashboard/register-products';
import Login from './pages/conta/login';

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
        layout: "/conta"

    },
    {
        path: "/main",
        name: "Main",
        component: Main,
        layout: "/admin"

    },
    {
        path: "/products/:id",
        name: "Products-Detais",
        component: Products,
        layout: "/admin"

    },
    {
        path: "/register-products",
        name: "Register Produtos",
        component: RegisterProducts,
        layout: "/admin"

    },
]

export default routes;