import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Rx JS';
  actoreslista:any =[];

  constructor(private http: HttpClient){
    
  }

  ngOnInit(){
    this.http.get('http://hp-api.herokuapp.com/api/characters/staff')
    .pipe(
      map( (item:any) => item.filter( (el:any) => el.gender === 'male')),
    )
    .subscribe(item =>{
      console.warn(item);
      this.actoreslista = item;

    });
    
  }

}
