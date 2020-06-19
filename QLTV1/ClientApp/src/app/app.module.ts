import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TheloaiComponent } from './theloai/theloai.component';
import { SachComponent } from './sach/sach.component';
import { MuontraComponent } from './muontra/muontra.component';
import { CtmuontraComponent } from './ctmuontra/ctmuontra.component';
import { TacgiaComponent } from './tacgia/tacgia.component';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TheloaiComponent, 
    SachComponent,
    MuontraComponent,
    CtmuontraComponent,
    TacgiaComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    
    
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'theloai', component: TheloaiComponent },
      { path: 'sach', component: SachComponent },
      { path: 'search-muontra', component: MuontraComponent },
      { path: 'search-ctmuontra', component: CtmuontraComponent },
      { path: 'search-tacgia', component: CtmuontraComponent },
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
