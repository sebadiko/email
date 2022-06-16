import { ICarpeta } from './carpetaProxy';
import { carpetaArreglos } from './carpetasArreglo';

export class carpetaArreglosProxy implements ICarpeta{
    private pCarpetaArreglo:carpetaArreglos;

    
    Acceso(numIdentificador: number, password: string) {
        if(password == "abc123"){
            if(this.pCarpetaArreglo== null){
                console.log("Activando el sujeto")
                this.pCarpetaArreglo = new carpetaArreglos();
            }
            return this.pCarpetaArreglo.busquedaCarpeta(numIdentificador)
        }
    }
 
    
}