//import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
//import { log } from 'console';
import Swal from 'sweetalert2';

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
  public secuencia_buscar = [];

  constructor(){
  }

  //FUNCION VALIDAR CARACTERES
  validar(valor){
    if(1){ //ENCRIPTA
      for(let i=0; i<valor.length; i++){
        if(valor[i]=="X"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Escriba de nuevo el mensaje sin X',
            footer: '<a href>Why do I have this issue?</a>'
          })
          this.encriptacion.mensaje = "";
        }
      }
    }
    else //DESENCRIPTA
    {
      for(let i=0; i<valor.length; i++){
        if(valor[i]=="X"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Escriba de nuevo el mensaje sin X'
          })
          this.desencriptacion.mensaje = "";
        }
      }
    }
    //REEMPLAZA LOS ESPACIOS EN BLANCO POR X
    console.log(valor.replace(/\s/g,"X"));
  }

  //FUNCION PARA ENCRIPTAR MENSAJE
  encriptar(){
    //REEMPLAZA LOS ESPACIOS EN BLANCO POR Xs
    //let equis = this.encriptacion.mensaje.replace(/\s/g,"X");
    //console.log(equis);

    this.encriptacion.resultado="";
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

      if(this.encriptacion.mensaje[i] == " "){ //SI ES ESPACIO VACIO ASIGNAR UNA X A LA ENCRIPTACION
        this.encriptacion.resultado = this.encriptacion.resultado.concat('X');
      }else{
        //CAMBIAR MSJE ENCRIPTADO CON C1 Y C2
        if(this.secuencia_buscar[i] == 1){ //BUSCAR EN C1
          let pos = this.array_letras.indexOf(this.encriptacion.mensaje[i].toLocaleLowerCase());
          this.encriptacion.resultado = this.encriptacion.resultado.concat(secuenciaC1[pos]);
        }else{ //BUSCAR EN C2
          let pos = this.array_letras.indexOf(this.encriptacion.mensaje[i].toLocaleLowerCase());
          this.encriptacion.resultado = this.encriptacion.resultado.concat(secuenciaC2[pos]);
        }
      }

    }
    //let result;
    //result = this.encriptacion.mensaje.replace("X", " ");
  }

  //GENERA UNA SECUENCIA COMPLETA A BUSCAR CON LA CANTIDAD DE CARACTERES QUE TIENE EL MSJE QUE SE VA A ENCRIPTAR
  generarSecuencia(){
    if(this.secuencia_buscar.length < this.encriptacion.mensaje.length){
      for(let i=this.secuencia_buscar.length; i<this.encriptacion.mensaje.length; i++){
        this.secuencia_buscar = this.secuencia_buscar.concat(this.secuencia_buscar)
      }
    }
  }

  //GENERA UNA SECUENCIA COMPLETA A BUSCAR CON LA CANTIDAD DE CARACTERES QUE TIENE EL MSJE QUE SE VA A DESENCRIPTAR
  generarSecuenciaD(){
    if(this.secuencia_buscar.length < this.desencriptacion.mensaje.length){
      for(let i=this.secuencia_buscar.length; i<this.desencriptacion.mensaje.length; i++){
        this.secuencia_buscar = this.secuencia_buscar.concat(this.secuencia_buscar)
      }
    }
  }

  //FUNCION PARA DESENCRIPTAR MENSAJE
  desencriptar(){
    this.desencriptacion.resultado="";
    this.generarSecuenciaD();
    //DECLARACION DE VARIABLES LOCALES
    let k1 = this.desencriptacion.valor_k1;
    let k2 = this.desencriptacion.valor_k2;
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

    //LEER Y DESENCRIPTAR MSJE INGRESADO
    for(let i=0; i<this.desencriptacion.mensaje.length;i++){
      if(this.desencriptacion.mensaje[i]== "X"){ //SI ES ESPACIO VACIO ASIGNAR UNA X A LA ENCRIPTACION
        this.desencriptacion.resultado = this.desencriptacion.resultado.concat(" ");
        //i--;
      }else{
        //CAMBIAR MSJE DESENCRIPTADO CON C1 Y C2
        if(this.secuencia_buscar[i] == 1){ //BUSCAR EN C1
          let pos = secuenciaC1.indexOf(this.desencriptacion.mensaje[i].toLocaleLowerCase());
          this.desencriptacion.resultado = this.desencriptacion.resultado.concat(this.array_letras[pos]);
        }else{ //BUSCAR EN C2
          let pos = secuenciaC2.indexOf(this.desencriptacion.mensaje[i].toLocaleLowerCase());
          this.desencriptacion.resultado = this.desencriptacion.resultado.concat(this.array_letras[pos]);
        }
      }
    }
  }

  //AGREGANDO SECUENCIA C1 A ENCRIPTACION
  btnc1_e(){
    if(this.encriptacion.secuencia.length >= 12){ //COMPROBAR SI LA SECUENCIA ENTRE C1 Y C2 ES >= 6
      return 0; //NO SE PERMITE AGREGAR MAS
    }else{
      this.encriptacion.secuencia = this.encriptacion.secuencia + "C1"; //SE CONCATENA Y SE AGREGA
      this.secuencia_buscar.push(1);
    }
  }

  //AGREGANDO SECUENCIA C2 A ENCRIPTACION
  btnc2_e(){
    if(this.encriptacion.secuencia.length >= 12){
      return 0;
    }else{
      this.encriptacion.secuencia = this.encriptacion.secuencia + "C2";
      this.secuencia_buscar.push(2);
    }
  }

  //AGREGANDO SECUENCIA C1 A DESENCRIPTACION
  btnc1_d(){
    if(this.desencriptacion.secuencia.length >= 12){
      return 0;
    }else{
      this.desencriptacion.secuencia = this.desencriptacion.secuencia + "C1";
      this.secuencia_buscar.push(1);
    }
  }

  //AGREGANDO SECUENCIA C2 A DESENCRIPTACION
  btnc2_d(){
    if(this.desencriptacion.secuencia.length >= 12){ 
      return 0;
    }else{
      this.desencriptacion.secuencia = this.desencriptacion.secuencia + "C2";
      this.secuencia_buscar.push(2);
    }
  }

  reset(val){
    if(val == 1){
      this.encriptacion.mensaje = "";
      this.encriptacion.resultado = "";
      this.encriptacion.secuencia = "";
      this.encriptacion.valor_k1 = 5;
      this.encriptacion.valor_k2 = 19;
    }else{
      this.desencriptacion.mensaje = "";
      this.desencriptacion.resultado = "";
      this.desencriptacion.secuencia = "";
      this.desencriptacion.valor_k1 = 5;
      this.desencriptacion.valor_k2 = 19;
    }
    console.log("reset");
  }

}
