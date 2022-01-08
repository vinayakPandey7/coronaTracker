import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictPageComponent } from './components/district-page/district-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { StatePageComponent } from './components/state-page/state-page.component';

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
