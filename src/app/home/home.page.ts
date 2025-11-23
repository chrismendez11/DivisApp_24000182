import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  cantidadQuetzales: number = 0;
  cantidadDolares: string = '0.00';
  tasaCambio: number = 8;

  constructor() {}

  convertir() {
    if (this.cantidadQuetzales && this.cantidadQuetzales > 0) {
      const resultado = this.cantidadQuetzales / this.tasaCambio;
      this.cantidadDolares = resultado.toFixed(2);
    } else {
      this.cantidadDolares = '0.00';
    }
  }
}
