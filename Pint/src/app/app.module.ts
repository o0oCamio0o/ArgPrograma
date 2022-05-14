import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { RedessocialesComponent } from './componentes/redes-sociales/redessociales.component';
import { LogoApComponent } from './componentes/logo-ap/logo-ap.component';
import { InfoPersonalComponent } from './componentes/info-personal/info-personal.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RedessocialesComponent,
    LogoApComponent,
    InfoPersonalComponent,
    BannerComponent,
    ExperienciaComponent,
    EstudiosComponent,
    HabilidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
