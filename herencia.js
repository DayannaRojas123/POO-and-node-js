//clase padre:

class computador{

    constructor(marca,pantalla,procesador){

        this.marca=marca
        this.tamañopantalla=pantalla
        this.tipoprocesador=procesador


    }

    almacenardatos(){

        return 'datos guardados'
    }
    
    
}



//clases heredadas:

class portatil extends computador{

    constructor(marca,pantalla,procesador,ram){

        super(marca,pantalla,procesador)

       
        this.cantmemoriaram=ram
    }

    procesardatos(){

        return 'procesado'
    }




}

const x=new portatil('lenovo',51,'pollo',777)


class compudemesa extends computador{

    constructor(marca,pantalla,procesador,teclado){

        super(marca,pantalla,procesador)

        this.tipoteclado=teclado


    }

    aceptarentradas(){

        return 'entro'
    }


}

const y=new compudemesa('lg',444,'yuca','kaññe')