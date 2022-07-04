import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../proyecto' 
import { ProyectoService } from '../proyecto.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar-p',
  templateUrl: './agregar-p.component.html',
  styleUrls: ['./agregar-p.component.scss']
})
export class AgregarPComponent {

  constructor(private proyectoService: ProyectoService,
    private snackBar: MatSnackBar,
    private router: Router,
    private ngModel: NgModel,
    private ngFrom: NgForm,
  ) { }

  
  proyectoModel = new Proyecto(Number(""), "","",new Date(""),"","","","",new Date(""),new Date(""),new Date(""),Number(""))

  onSubmit() {
    this.proyectoService.addP(this.proyectoModel).subscribe(() => {
      this.snackBar.open('Proyecto guardado', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/proyecto']);
    })
  }
}
