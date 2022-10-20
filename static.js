// static- There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.

class Governor {
    static doSomething1(){
      console.log('hi')
    }
  
    static doAnother(){
      console.log('yo')
    }
  
    static veto(){
      console.log('hey')
    }
  }
  
  Governor.veto()
  Governor.doSomething1()
  Governor.doAnother()

  //inheritance

  class Person {
    constructor(prop1, prop2, prop3){
      this.prop1 = prop1;
      this.prop2 = prop2;
      this.prop3 = prop3;
    }

    aMethod(){
      console.log ('im   a method')
    }
  }

  console.log(Person);
  
  class PostalWorker extends Person {
    constructor(a,b,c,d){
      super(a,b,c)
      this.d = d
    }
    newMethod(){
        console.log('I am a new method');
    }
  }
  
  class Chef extends Person {
    constructor(a,b,c,d){
      super(a,b,c)
      this.d = d
    }
    newMethod(){
        console.log('I am a new method in chef class');

    }
  }
  
  