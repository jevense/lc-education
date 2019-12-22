import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../home/home.module').then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: 'store',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../store/store.module').then(m => m.StorePageModule)
                    }
                ]
            },
            {
                path: 'bank',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../bank/bank.module').then(m => m.BankPageModule)
                    }
                ]
            },
            {
                path: 'course',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../course/course.module').then(m => m.CoursePageModule)
                    }
                ]
            },
            {
                path: 'mine',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../mine/mine.module').then(m => m.MinePageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/main/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/main/tabs/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
