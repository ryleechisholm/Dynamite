import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { CompsComponent } from './comps/comps.component';
import { ExamplesComponent } from './examples/examples.component';
import { FontsComponent } from './fonts/fonts.component';
import { IconsComponent } from './icons/icons.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'colors',
    component: ColorsComponent
  },
  {
    path: 'components',
    component: CompsComponent
  },
  {
    path: 'examples',
    component: ExamplesComponent
  },
  {
    path: 'fonts',
    component: FontsComponent
  },
  {
    path: 'icons',
    component: IconsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
