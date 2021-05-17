import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from '../app/components/header.component'
import { SideMenuComponent } from './components/side-menu/side-menu.component';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
 { 
  path: '',
    component: LayoutComponent,
    children: [
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
