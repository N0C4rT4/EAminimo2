import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { StationServices } from '../../services/station.services';
import { Station } from '../../models/station';
import { NavController } from '@ionic/angular';




@Component({
  selector: 'app-addstation',
  templateUrl: './addstation.component.html',
  styleUrls: ['./addstation.component.scss'],
})
export class AddstationComponent implements OnInit {

  addstationForm: FormGroup;

  validation_messages: any;


  constructor(private addstationService: StationServices,private navCtrl: NavController,
    
    private router: Router, private formBuilder: FormBuilder) { 


                this.addstationForm = this.formBuilder.group({

                  name: new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.pattern(/.{1,20}$/)])),
                  state: new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.pattern(/.{1,9}$/)])),
                  description: new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.pattern(/.{1,150}$/)])),
                })


              }

  ngOnInit() {

    this.validation_messages={
      'name': [
        { type: 'required', message: 'Name is required'},
        { type: 'pattern', message: 'It has to be between 1 and 20 characters long'}
      ],
      'state': [
        { type: 'required', message: 'State is required'},
        { type: 'pattern', message: 'It has to be between 1 and 9 characters long, and has to be either available or NA'}
      ],
      'description': [
        { type: 'required', message: 'Description is required'},
        { type: 'pattern', message: 'It has to be between 1 and 150 characters long'}
      ]
    }

  }
//   

}




// private handleError(err: HttpErrorResponse) {
//   if( err.status == 500 ) {
//     alert(err);addStationForm(){
//     } else if ( err.status == 404 ) {
//       alert('404 not found');
//     }

//   }





  // async registroStation(fRegistroStation:NgForm){

  //   if(fRegistroStation.invalid){
  //     return;
  //   }
  //   const valido = await this.addstationService.addStation(this.name, this.addstationService, this.decription);

  //   if(valido){

  //     this.navCtrl.navigateRoot('/home');
  //   }else {
  //     // mostrar alerta de usuario y contraseña no correctos
  //     this.uiService.alertaInformativa('Datos mal introducidos.');
  //   }
  // }

  // 
      
  
  //   this.addstationService.addStation(Station)
  //     .subscribe(
  //       res => {
  //       console.log(res);
  //         let token = res['token'];
  //         localStorage.setItem('token', token);

  //         this.router.navigateByUrl("");
  //       },

  //       err => {
  //         console.log(err);
  //         this.handleError(err);
  //       });
    
