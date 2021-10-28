import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-personajes-hp',
  templateUrl: './personajes-hp.component.html',
  styleUrls: ['./personajes-hp.component.css']
})
export class PersonajesHPComponent implements OnInit {

  buscarpersonaje:any='';
  @Output() escuchador =new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  emitirbusqueda(){
    this.escuchador.emit(this.buscarpersonaje);
  }
}
