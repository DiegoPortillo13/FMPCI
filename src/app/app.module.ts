import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { InventarioComponent } from './inventario/inventario.component';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';
import { StaticsComponent } from './statics/statics.component';
import { PagesComponent } from './pages/pages.component';
import { TablaComponent } from './tabla/tabla.component';
import { AgregarPComponent } from './agregar-p/agregar-p.component';
import { EliminarPComponent } from './eliminar-p/eliminar-p.component';
import { EditarPComponent } from './editar-p/editar-p.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    ProyectosComponent,
    InventarioComponent,
    CotizacionesComponent,
    StaticsComponent,
    PagesComponent,
    TablaComponent,
    AgregarPComponent,
    EliminarPComponent,
    EditarPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
