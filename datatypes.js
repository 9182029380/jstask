//8 data types 

//string
//number
//boolean
//bigint
//undefined
//null
//symbol
//object

// let name="sharath kumar"
// let age=20
// let x=BigInt("1234567890-234567890123456789")
// let isMarried=true
// let isMarried1=false
// let car=["sharath","kumar",9,56,89]
// console.log(car)
// const person ={
//     name:"sharath kumar",
//     age:20,
// }

//let x=987867.345
//what is the datatype of x      2

//Symbol to create  unique identifiers for objects 

// const uniquekey=Symbol('description')
// const obj={
//     [uniquekey]:"this is a unique value"
// };
// console.log(obj[uniquekey])


//event handling system 

// const eventId= Symbol('eventid');
// const eventtimestamp=Symbol('eventTimestamp')

// class Event{
//     constructor(name){
//         this.name=name;
//         this.eventId=Math.random().toString(36).substring(2,9);
//         this.eventtimestamp=Date.now();
//     }

//     getId(){
//         return this.eventId;
//     }
//     getTimestamp(){
//         return this.eventtimestamp;
//     }
// }

//     const userevent=new Event('userlogin');
//     userevent.user="sharathkumar";
//     userevent.action="login";
//     userevent.timestamp=Date.now();

//     console.log(userevent.getId())
//     console.log(userevent.getTimestamp())

//     console.log(userevent.user);
//     console.log(userevent.action);
//     console.log(userevent.timestamp);

// const x= Symbol("sharathkumar")
// console.log(x.description);
// console.log(x.toString());
// console.log(x)

let id=Symbol("id");
let person={
    name:"shrathkumar",
    age:20,
    [id]:123

};
// for(let key in person){
//     console.log(key);
// }

console.log(person);












