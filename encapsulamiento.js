class animaal{

    constructor(nombre,raza,edad){

        this.name=nombre
        this.breed=raza
        this.age =edad
    }

    obtenerinfo(){

        return `el nombre del animal es ${this.name} y la raza es ${this.breed}`
    }
}

const nuevoperro = new animaal('kira','beagle',6) 

//ENCAPSULAMIENTO
//restriccion para acceder a los datos


class dog extends animaal{ 
    #raza

    constructor(nombre,raza,color,) {

        super(nombre,raza,edad) 
        this.color =color
        this.#raza=raza



    }
    getraza(){ //invoca get para mostrar lo q hay en raza
        return this.#raza
    }

    setraza(raza){     //se puede cambiar el valor de la cosa protegida
        this.#raza=raza //para darle un valor al protegido
    }


}

const myperro2= new dog ('luna','pincher','blanco')

 myperro2.setraza('lobo siberiano')//cambia el v alor de raza
 myperro2.getraza() //muestra el valor de raza

 myperro2.raza='pitbull' //agregar atributo a la intancia myperro2
 Object.values(myperro2)