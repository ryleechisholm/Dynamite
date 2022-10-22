import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorsComponent } from './colors/colors.component';
import { CompsComponent } from './comps/comps.component';
import { ExamplesComponent } from './examples/examples.component';
import { FontsComponent } from './fonts/fonts.component';
import { IconsComponent } from './icons/icons.component';
import { ErrorPgComponent } from './examples/error-pg/error-pg.component';
import { FormPgComponent } from './examples/form-pg/form-pg.component';
import { HomePgComponent } from './examples/home-pg/home-pg.component';
import { InfoPgComponent } from './examples/info-pg/info-pg.component';
import { LoginPgComponent } from './examples/login-pg/login-pg.component';
import { StepsComponent } from './comps/steps/steps.component';
import { AccordionComponent } from './comps/accordion/accordion.component';
import { ButtonsComponent } from './comps/buttons/buttons.component';
import { CardComponent } from './comps/card/card.component';
import { DropdownComponent } from './comps/dropdown/dropdown.component';
import { ErrorsComponent } from './comps/errors/errors.component';
import { FooterComponent } from './comps/footer/footer.component';
import { FormsComponent } from './comps/forms/forms.component';
import { HeaderComponent } from './comps/header/header.component';
import { NavigationComponent } from './comps/navigation/navigation.component';
import { PageTitleComponent } from './comps/page-title/page-title.component';
import { TitlesComponent } from './comps/titles/titles.component';
import { PaginationComponent } from './comps/pagination/pagination.component';
import { PopupsComponent } from './comps/popups/popups.component';
import { ProgressBarComponent } from './comps/progress-bar/progress-bar.component';
import { SpinnerComponent } from './comps/spinner/spinner.component';
import { TableComponent } from './comps/table/table.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    CompsComponent,
    ExamplesComponent,
    FontsComponent,
    IconsComponent,
    ErrorPgComponent,
    FormPgComponent,
    HomePgComponent,
    InfoPgComponent,
    LoginPgComponent,
    StepsComponent,
    AccordionComponent,
    ButtonsComponent,
    CardComponent,
    DropdownComponent,
    ErrorsComponent,
    FooterComponent,
    FormsComponent,
    HeaderComponent,
    NavigationComponent,
    PageTitleComponent,
    TitlesComponent,
    PaginationComponent,
    PopupsComponent,
    ProgressBarComponent,
    SpinnerComponent,
    TableComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
