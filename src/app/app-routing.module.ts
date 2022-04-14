import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataResolver } from './features/agencias/resolvers/data.resolver';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/agencias/agency.module').then((m) => m.AgencyModule),
      resolve: {agencies: DataResolver} 
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
