import { Component } from '@angular/core';
import { BuscarpaisService } from './buscarpais.service';
import { HarrypoterService } from './harrypoter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    //public servicio: BuscarpaisService;
    public servicioHarry: HarrypoterService
    ){
    
  }
  
  title = 'actividad03';

  //paisitem:any='';
  //paisimp:any='';
  //paises:any =[];
    personajes:any =[];
    personajeitem:any='';
    personajeimp:any='';

  //public imprimirenpantalla(pais:string){
    //this.paisitem=pais;
    //this.paises=this.servicio.getpaises();
    //const busqueda = this.servicio.getdata(pais, this.paises);
    //this.paisimp=busqueda;
  //}
  public exponerpersonajes(){
    this.personajes=this.servicioHarry.exponerpersonajes();
  }

  public buscarpersonaje(buscarpersonaje:string){
    const busqueda = this.servicioHarry.buscarpersonaje(buscarpersonaje);
    this.personajeimp=busqueda;
  }

}
