import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { NewsComponent } from '../news/news.component';
import { TermsCondsComponent } from '../terms-conds/terms-conds.component';
import { LinksComponent } from '../links/links.component';

const routes: Routes = [
  //{ path: 'home', component: HomeComponent },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' }

  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'links', component: LinksComponent },
  { path: 'about', component: AboutComponent },
  { path: 'termsandconditions', component: TermsCondsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
