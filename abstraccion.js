
class gato{ //crear una clase simple con abstraccion alta como "molde" de las siguientes clases e instancias

    constructor(nombre,raza,altura){

        this.name=nombre
        this.breed=raza
        this.high=altura

    }

    comer(nombredelgato){
        return 'hola soy'+nombredelgato+'y como yummy yummy'
    }
   
}

class siames extends gato{ 
    constructor(nombre,raza,altura,edad){
        super(nombre,raza,altura)
        this.age=edad                        //mismos atributos utilizados

    }
}

let siameslindo= new siames('Salome','persa','1.10','45')
console.log(siameslindo.comer(siameslindo.nombre))   //podemos usar los mismos metodos de la abstraccion