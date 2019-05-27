import { Pipe, PipeTransform } from '@angular/core';
import { Station } from '../models/station';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: Station[], texto: string ): Station[] {

    if(texto.length ===0){
      return arreglo;
    }

    texto = texto.toLowerCase();

    return arreglo.filter(palabra =>{
      return palabra.name.toLocaleLowerCase().includes(texto);
    });
  }

}
