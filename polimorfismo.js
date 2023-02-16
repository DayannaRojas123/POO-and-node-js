
class padre { //la clase heredada puede tener los metodos del padre pero cada uno con comportamiento diferente
    
    casados(x, y) { 
    console.log(x+' Y '+y);
    }
  }
  

  class pareja extends padre{
    
    casados(a, b) {
    // super : heredar propiedades y métodos
    super.casados(a, b);
    console.log('que vivan los novios')
    }
  }
  
  var objeto1 = new pareja();
  var mostrar = objeto1.casados('Juan', 'Dayanna');