import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dropdown',
    loadChildren: './components/dropdown/dropdown.module#DropdownModule'
  },
  {
    path: 'tabs',
    loadChildren: './components/tabs/tabs.module#TabsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
