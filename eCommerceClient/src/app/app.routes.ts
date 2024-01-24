import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { ShopppingChartComponent } from './components/shoppping-chart/shoppping-chart.component';
import { OrderComponent } from './components/order/order.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutsComponent,
        children:[
            {
                path: "",
                component: HomeComponent
            },
            {
                path: "shopping-charts",
                component: ShopppingChartComponent
            },
            {
                path: "orders",
                component: OrderComponent
            },
            {
                path: "login",
                component: LoginComponent
            },
            {
                path: "register",
                component: RegisterComponent
            }
        ]
    }
];