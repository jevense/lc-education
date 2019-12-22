import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
    {
        path: 'main',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'cart',
        canActivate: [AuthGuard],
        loadChildren: () => import('./cart/cart.module').then(m => m.CartPageModule)
    },
    {
        path: 'product-list/:type',
        loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListPageModule)
    },
    {
        path: 'product-detail/:id',
        loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailPageModule)
    },
    {
        path: 'order-confirm',
        loadChildren: () => import('./order-confirm/order-confirm.module').then(m => m.OrderConfirmPageModule)
    },
    {
        path: 'browser',
        loadChildren: () => import('./browser/browser.module').then(m => m.BrowserPageModule)
    },
    {
        path: '',
        redirectTo: '/main/tabs/home',
        pathMatch: 'full'
    },
    {
        path: 'exercise',
        loadChildren: () => import('./exercise/exercise.module').then(m => m.ExercisePageModule)
    },
    {
        path: 'examination',
        loadChildren: () => import('./examination/examination.module').then(m => m.ExaminationPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
