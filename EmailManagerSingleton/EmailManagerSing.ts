import { EmailLeaf } from "../CarpetaComposite/EmailLeaf";
import { CarpetaComposite } from "../CarpetaComposite/CarpetaComposite";
import { EmailComponent } from "../CarpetaComposite/EmailComponent";
import { carpetaArreglos } from "../Proxy/carpetasArreglo";

export class EmailManagerSing{
    //instancia privada para manejar el singleton internamente
    private static instance: EmailManagerSing;
    public BandejaEnviados: EmailLeaf[] = [];
    public aux= new carpetaArreglos(); 

    //el constructor debe estar privado para no permitir generar instancia de la clase
    private constructor() {

    }

    //el metodo estatico permite acceder a la instancia sin necesidad de instanciarla
    public static getInstance(): EmailManagerSing {
        //si la instancia no existe, la creamos
        if (!EmailManagerSing.instance) {
            EmailManagerSing.instance = new EmailManagerSing();
        }
        //devolvemos la instancia de la clase
        return EmailManagerSing.instance;
    }


    public Enviar(email: EmailLeaf){
        //si tenemos todos los datos, agregamos el mail a bandeja de enviados
        if (email.Asunto != "" && email.Contenido != "" && email.Para.length > 0 && email.Remitente != null) {
            this.BandejaEnviados.push(email);
        }
    }

    public CrearCarpeta(pNombre: string, pIdentificador: number, pAsunto = "", pContenido = ""): Boolean{
        let carpetas: CarpetaComposite[] = [];
        if(pNombre !="" && pIdentificador != null && pAsunto == "" && pContenido == ""){
            carpetas[pIdentificador] = new CarpetaComposite(pNombre, pIdentificador)
            this.aux.agregarCarpeta(carpetas)
            return true
        }
        return false;
    }

    public AñadiEmail(pCarpeta: CarpetaComposite, pEmail: EmailComponent): CarpetaComposite{
        pCarpeta.Add(pEmail);
        return pCarpeta;
    }

}