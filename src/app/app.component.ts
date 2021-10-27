import { Component } from '@angular/core';
import { BuscarpaisService } from './buscarpais.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public servicio: BuscarpaisService
    ){
    
  }
  
  title = 'actividad03';

  paisitem:any='';
  paisimp:any='';
  paises:any =[];

  public imprimirenpantalla(pais:string){
    this.paisitem=pais;
    this.paises=this.servicio.getpaises();
    const busqueda = this.servicio.getdata(pais, this.paises);
    this.paisimp=busqueda;
  }
}
