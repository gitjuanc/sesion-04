import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  buscarpais:any='';
  @Output() escuchador =new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  emitirbusqueda(){
    this.escuchador.emit(this.buscarpais);
  }

}
