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
import { AgregarPComponent } from './agregar-p/agregar-p.component';
import { EliminarPComponent } from './eliminar-p/eliminar-p.component';
import { EditarPComponent } from './editar-p/editar-p.component';
import { ProTablaComponent } from './pro-tabla/pro-tabla.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';

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
    AgregarPComponent,
    EliminarPComponent,
    EditarPComponent,
    ProTablaComponent,
    DialogoConfirmacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
