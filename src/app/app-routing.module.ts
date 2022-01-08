import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictPageComponent } from './district-page/district-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { StatePageComponent } from './state-page/state-page.component';

const routes: Routes = [
  {path:'',component: MainPageComponent},
  {path:'main', redirectTo: '' },
  {path:'state',component: StatePageComponent},
  {path:'district',component: DistrictPageComponent}
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }