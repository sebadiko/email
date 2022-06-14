import { Contacto } from './contacto';

export class Email {

    public Asunto: string = "";
    public Contenido: string ="";
    public Remitente: Contacto;
    public Para: Array<Contacto> = [];

}