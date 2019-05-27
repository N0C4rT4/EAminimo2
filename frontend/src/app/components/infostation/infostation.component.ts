import { Component, OnInit } from '@angular/core';
import {BikeServices} from "../../services/bike.services";
import {StationServices} from "../../services/station.services";
import {DataService} from "../../services/data.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-infostation',
  templateUrl: './infostation.component.html',
  styleUrls: ['./infostation.component.scss'],
})
export class InfostationComponent implements OnInit {
  Station: Object;
  bikes: Object;
  llistaUnBikes: Object;
  StationId: string;

  constructor(private StationService: StationServices,private bikeService: BikeServices, private dataService:DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.clickedStationId.subscribe(StationId => this.StationId = StationId)
    console.log("Id del element ok: "+this.StationId)
    if(this.StationId=="0")
    {
      this.router.navigateByUrl("/");
    }
    this.obtainStation()
    this.llistaBikes()
    this.obtainBikes()
  }

  refresh(){
    this.obtainStation()
    this.llistaBikes()
    this.obtainBikes()
  }



  botoLlista(idBike) {
    //this.dataService.changeBikeId(idBike)
    console.log(idBike+" , "+this.StationId)
    this.StationService.deleteBike(idBike,this.StationId).subscribe(response => {
          console.log("resp serve" + response.body);
         
          if (response.status == 200) {
            this.refresh();
          } else {
            console.log("Error");
          }
        },
        err => {
          console.log("Error del server" + err);
        });

  }
  

  obtainBikes(){
    if(this.StationId!="0") {
      this.StationService.obtainStationBikes(this.StationId)
          .subscribe(response => {
                console.log("Resposta del server" + response.body);
                
                if (response.status == 200) {
                  this.bikes = response.body;
                } else {
                  
                  console.log("Error");
                }
              },
              err => {
                console.log("Error del server" + err);
                
              });
    }

  }

  

  botoLlistaUnBikes(idBike) {
    this.dataService.changeBikeId(idBike)
    console.log(idBike+" , "+this.StationId)
    this.StationService.addBike(idBike,this.StationId).subscribe(response => {
          console.log("Server ok" + response.body);
          if (response.status == 200) {
            this.refresh();
          } else {
            
            console.log("Error");
          }
        },
        err => {
          console.log("Error Server" + err);
          
        });
  }

  llistaBikes() {
    console.log("Operación del server ok:");
    this.bikeService.obtainUnassinedBikes()
        .subscribe(response => {
              console.log("Resposta del server"+response.body);
             
              if(response.status==200){
                this.llistaUnBikes=response.body;
              }
              else {
                
                console.log("Error");
              }
            },
            err => {
              console.log("Error del server"+err);
              
              if(err.status==404){
                console.log("No hay")
              }
              else {
                
                console.log("Error");
              }
            });
  }
  obtainStation() {
    console.log("Operación de info de las estaciones ");
    if(this.StationId!="0") {
      this.StationService.obtainStation(this.StationId)
          .subscribe(response => {
                console.log("Resposta del server" + response.body);
                
                if (response.status == 200) {
                  this.Station = response.body;
                } else {
                  
                  console.log("Error");
                }
              },
              err => {
                console.log("Error del server" + err);
                
              });
    }
  }



}
