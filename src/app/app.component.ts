import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  encriptacion = {
    mensaje: '',
    valor_k1: 1,
    valor_k2: 1,
    secuencia: '',
    resultado: '',
  }

  desencriptacion = {
    mensaje: '',
    valor_k1: 1,
    valor_k2: 1,
    secuencia: '',
    resultado: '',
  }

  constructor(){

  }

  encriptar(){
    console.log("msje encriptado");
    console.log(this.encriptacion);
  }

  desencriptar(){
    console.log("desencriptando msje");
  }

}
