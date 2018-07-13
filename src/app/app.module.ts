import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { DbService} from './db.service';
import { FarmsComponent } from './farms/farms.component';
import { FarmsdetailComponent } from './farmsdetail/farmsdetail.component';
import { AppRoutingModule, RoutingComponent } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LazyfarmsComponent } from './lazyfarms/lazyfarms.component';
import { LazyfarmsdetailComponent } from './lazyfarmsdetail/lazyfarmsdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    PageNotFoundComponent,
    // LazyfarmsComponent,
    // LazyfarmsdetailComponent
    // FarmsComponent,
    // FarmsdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }

