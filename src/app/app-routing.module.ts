import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { CompsComponent } from './comps/comps.component';
import { ExamplesComponent } from './examples/examples.component';
import { FontsComponent } from './fonts/fonts.component';
import { IconsComponent } from './icons/icons.component';
import { HomeComponent } from './home/home.component';
import {AccordionComponent} from "./comps/accordion/accordion.component";
import {ButtonsComponent} from "./comps/buttons/buttons.component";
import {CardComponent} from "./comps/card/card.component";
import {DropdownComponent} from "./comps/dropdown/dropdown.component";

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
    component: CompsComponent,
    children: [
      {
        path: '',
        redirectTo: 'accordion',
        pathMatch: 'full'
      },
      {
        path: 'accordion',
        component: AccordionComponent
      },
      {
        path: 'buttons',
        component: ButtonsComponent
      },
      {
        path: 'card',
        component: CardComponent
      },
      {
        path: 'dropdown',
        component: DropdownComponent
      }
    ]
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
