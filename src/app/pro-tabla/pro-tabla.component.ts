import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import {Proyecto} from '../proyecto' 
import { ProyectoService } from '../proyecto.service';

@Component({
  selector: 'app-pro-tabla',
  templateUrl: './pro-tabla.component.html',
  styleUrls: ['./pro-tabla.component.scss']
})
export class ProTablaComponent implements OnInit {


  constructor(private proyectoService: ProyectoService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarMascota(proyecto: Proyecto) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${proyecto.numProyecto}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.proyectoService
          .deleteP(proyecto)
          .subscribe(() => {
            this.obtenerMascotas();
            this.snackBar.open('Proyecto eliminado', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerMascotas();
  }

  obtenerMascotas() {
    return this.proyectoService.getTodos()
  }
}
