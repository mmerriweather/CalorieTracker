import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

export const router: Routes = [
    { path: '', redirectTo: 'test1', pathMatch: 'full' },
    { path: 'test1', component: Test1Component },
    { path: 'test2', component: Test2Component }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);