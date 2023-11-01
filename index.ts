class UserService {
  sayHi(){
    console.log("Hi");
  }
}

class Component {
    constructor(public user:UserService){}
}
// Angular "DI"

class Injector {
   private _container = new Map(); // Key/value ==> key can be an Object or boolean , it keep the order

   // create instances for providers services and add them to the container
   constructor(private _providers : any[] = []){
      this._providers.forEach(service => this._container.set(service , new service()));
     }
   get(service : any){
     const serviceInstance = this._container.get(service);
     if(!serviceInstance){
       throw Error("No provider found !!! ");
     }
     return serviceInstance;
   }
}

// somewhere in application 
// Angular do li this 
const injector = new Injector([UserService]);
const component = new Component(injector.get(UserService));
component.user.sayHi();


