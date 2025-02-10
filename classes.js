class Vehicle{
    constructor(type,model){
        this.type=type;
        this.model=model;
    }
    getDetails(){
        return` ${this.type}-${this.model}`;
    }
}
class carrental extends Vehicle{
    constructor(model,rentalprice){
        super("car",model);
        this.rentalprice=rentalprice;
    }
    getrentalprice(days){
        return this.rentalprice*days;
    }

}
const rental =new carrental("toyota innova",1500);
console.log(rental.getrentalprice(7));