import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { FarmsComponent } from '../farms/farms.component';
import { FarmsdetailComponent } from '../farmsdetail/farmsdetail.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import { LazyfarmsComponent} from '../lazyfarms/lazyfarms.component';
import { LazyfarmsdetailComponent} from '../lazyfarmsdetail/lazyfarmsdetail.component';

import {RouterModule, Routes} from '@angular/router';
const appRoutes: Routes = [
  { path: '', component: FarmsComponent },
  { path: 'farms', component: FarmsComponent },
  { path: 'farms/detail/:id', component: FarmsdetailComponent },
  { path: 'lazyfarms', component: LazyfarmsComponent },
  { path: 'lazyfarms/detail/:id', component: LazyfarmsdetailComponent },
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [
    CommonModule,
    // AppRoutingRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const RoutingComponent = [FarmsComponent, FarmsdetailComponent, LazyfarmsComponent,
  LazyfarmsdetailComponent];
