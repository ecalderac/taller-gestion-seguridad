import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  encriptacion = {
    mensaje: '',
    valor_k1: 5,
    valor_k2: 19,
    secuencia: '',
    resultado: '',
  }

  desencriptacion = {
    mensaje: '',
    valor_k1: 5,
    valor_k2: 19,
    secuencia: '',
    resultado: '',
  }

  public array_letras = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']; //27 LETRAS
  public valor: string;
  public secuencia_buscar = [];

  constructor(){
  }

  //FUNCION PARA ENCRIPTAR MENSAJE
  encriptar(){
    this.generarSecuencia();
    //DECLARACION DE VARIABLES LOCALES
    let k1 = this.encriptacion.valor_k1;
    let k2 = this.encriptacion.valor_k2;
    let secuenciaC1 = [];
    let secuenciaC1AUX_P = [];
    let secuenciaC1AUX_S = [];
    let secuenciaC2 = [];
    let secuenciaC2AUX_P = [];
    let secuenciaC2AUX_S = [];

    //GENERANDO SECUENCIA DE LETRAS PARA C1 CON VALOR DE K1 INGRESADO
    secuenciaC1AUX_P = this.array_letras.slice(k1);
    secuenciaC1AUX_S = this.array_letras.slice(0,k1);
    secuenciaC1 = secuenciaC1AUX_P.concat(secuenciaC1AUX_S);

    //GENERANDO SECUENCIA DE LETRAS PARA C2 CON VALOR DE K2 INGRESADO
    secuenciaC2AUX_P = this.array_letras.slice(k2);
    secuenciaC2AUX_S = this.array_letras.slice(0,k2);
    secuenciaC2 = secuenciaC2AUX_P.concat(secuenciaC2AUX_S);

    //LEER Y ENCRIPTAR MSJE INGRESADO
    for(let i=0; i<this.encriptacion.mensaje.length;i++){
      console.log(this.encriptacion.mensaje[i]);
      //CAMBIAR MSJE ENCRIPTADO CON C1 Y C2
      if(this.secuencia_buscar[i] == 1){ //BUSCAR EN C1
        //let pos = this.encriptacion.mensaje[i].indexOf(secuenciaC1);
        //BUSCAR EN LA SECUENCIA DE C1 EL CARACTER QUE ESTA EN MENSAJE Y REMPLAZARLO POR EL DE LA SECUENCIA
        //UNA POSIBLE SOLUCION ES GUARDAR LA SECUENCIA C1-C2 COMO ARREGLO DE OBJETOS(EJM - [(a,f), (b,g), ....])

        this.encriptacion.resultado = this.encriptacion.resultado.concat()
      }else{ //BUSCAR EN C2

      }

    }
    let result;
    result = this.encriptacion.mensaje.replace("X", " ");
    //console.log(result);
    //console.log(this.encriptacion.mensaje);
    this.encriptacion.resultado = this.encriptacion.mensaje;

  }

  //GENERA UNA SECUENCIA COMPLETA A BUSCAR CON LA CANTIDAD DE CARACTERES QUE TIENE EL MSJE QUE SE VA A ENCRIPTAR
  generarSecuencia(){
    if(this.secuencia_buscar.length < this.encriptacion.mensaje.length){
      for(let i=this.secuencia_buscar.length; i<this.encriptacion.mensaje.length; i++){
        this.secuencia_buscar = this.secuencia_buscar.concat(this.secuencia_buscar)
      }
    }
    console.log(this.secuencia_buscar);
  }

  //FUNCION PARA DESENCRIPTAR MENSAJE
  desencriptar(){
    this.desencriptacion.resultado = this.desencriptacion.mensaje;
  }

  //AGREGANDO SECUENCIA C1 A ENCRIPTACION
  btnc1_e(){
    if(this.encriptacion.secuencia.length >= 12){ //COMPROBAR SI LA SECUENCIA ENTRE C1 Y C2 ES >= 6
      return 0; //NO SE PERMITE AGREGAR MAS
    }else{
      this.encriptacion.secuencia = this.encriptacion.secuencia + "C1"; //SE CONCATENA Y SE AGREGA
      this.secuencia_buscar.push(1);
      console.log(this.secuencia_buscar);
    }
  }

  //AGREGANDO SECUENCIA C2 A ENCRIPTACION
  btnc2_e(){
    if(this.encriptacion.secuencia.length >= 12){
      return 0;
    }else{
      this.encriptacion.secuencia = this.encriptacion.secuencia + "C2";
      this.secuencia_buscar.push(2);
      console.log(this.secuencia_buscar);
    }
  }

  //AGREGANDO SECUENCIA C1 A DESENCRIPTACION
  btnc1_d(){
    if(this.desencriptacion.secuencia.length >= 12){
      return 0;
    }else{
      this.valor = "C1";
      this.desencriptacion.secuencia = this.desencriptacion.secuencia + "C1";
    }
  }

  //AGREGANDO SECUENCIA C2 A DESENCRIPTACION
  btnc2_d(){
    if(this.desencriptacion.secuencia.length >= 12){ 
      return 0;
    }else{
      this.desencriptacion.secuencia = this.desencriptacion.secuencia + "C2";
    }
  }

}
