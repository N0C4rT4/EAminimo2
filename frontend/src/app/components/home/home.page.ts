import { Component } from '@angular/core';
import { StationServices } from 'src/app/services/station.services';
import { BikeServices } from 'src/app/services/bike.services';
import { DataService } from 'src/app/services/data.services';
import { ActivatedRoute,Router } from '@angular/router';

import { Station } from '../../models/station';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [StationServices]
})
export class HomePage {
  lista:Object;
  listabbikes:Object;
  textoBuscar = '';
  Station = [];




  constructor(
    private stationService: StationServices,
    private bikeService: BikeServices,
    private dataService: DataService,
    private router: Router,
    private activatedRoute:ActivatedRoute


   
) {
    activatedRoute.params.subscribe(val => {
        this.listaStations();
    });
}

ngOnInit() {
  this.listaStations();

  localStorage.removeItem('stationId');
  this.getStations();

}
buscar(event){
  // console.log(event)
  const texto = event.detail.value;
  this.textoBuscar=texto;
}


listaStations() {
  console.log('Pedir estacion server:');
  this.stationService.obtainStations()
      .subscribe(response => {
            console.log('Resposta server' + response.body);
            // Podem filtrar per tots els codis 2XX
            if (response.status == 200) {
              this.lista = response.body;
            } else {
              // Error desconegut
              console.log('Error');
            }
          },
          err => {
            console.log('Error del server' + err);
            // Podem filtrar per tots els altres codis
            if (err.status == 404) {
              console.log('No hay estaciones');
            } else {
              // Error desconegut
              console.log('Error');
            }
          });
}
botoLlista(id) {
  this.dataService.changeStationId(id);
  this.router.navigateByUrl('/station');
}

listaBikes() {
  console.log('Operació bikes ok server:');
  this.bikeService.obtainUnassinedBikes()
      .subscribe(response => {
            console.log('Resposta del Serve' + response.body);
            if (response.status == 200) {
              this.listabbikes = response.body;
            } else {
              // Error desconegut
              console.log('Error');
            }
          },
          err => {
            console.log('Error del server' + err);
            if (err.status == 404) {
              console.log('No hay');
            } else {
              // Error desconegut
              console.log('Error');
            }
          });
}
reorder( event ) {
  // console.log(event);


  

  const itemMover = this.Station.splice( event.detail.from, 1 )[0];
  this.Station.splice( event.detail.to, 0, itemMover );

  event.detail.complete();
}

onClick() {
  console.log(this.lista);
}



getStations(){
  this.stationService.obtainStations()
    .subscribe(res =>{
      this.stationService.station = res as unknown as Station[];
    })
}

// public sortByKey(array, key) {
//         return array.sort(function (a, b) {
//             var x = a[key]; var y = b[key];
//             return ((x < y) ? -1 : ((x > y) ? 0 : 1));
//         });
//     }
ordenarStation(){
  this.stationService.station.sort(function(a,b){
    var x=a.name.toUpperCase();
    var y=b.name.toUpperCase();
    return(x< y) ? -1 : (x>y) ? 1:0;
  })
}



}