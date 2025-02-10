// function bookflights(destination){
//     let airline="AirIndia";
//     const ticketprice=9000;
//     console.log(`flight booked to ${destination} via ${airline} for rs ${ticketprice}`)
// }
// bookflights("mumbai")

//arrow function 
// const getflightdetails =(flightnumber)=>`flight ${flightnumber} is scheduled for departure.`
// console.log(getflightdetails("AI202"))
//default parameters

// const bookhotel= (hotel="grand palace",city="Hyd")=>{
//     console.log(`hotel booked at ${city} ${hotel} `)
// }
// bookhotel();
// bookhotel("taj","mumbai");

//destructuring Assignment 

// const traveler={
//     name:"Rahul",
//     age:25,
//     occupation:"Software Engineer",
//     hobbies:["cricket","football","reading"],
//     country:"india"
// };
// const {name,age,occupation,country,hobbies}=traveler;
// console.log(`${name} is traveling from ${country} and his hobbies ${hobbies}`)

//spread operator

// const amenities =["wifi","pool","gym"]
// const additionalAmenities=["spa","airportpickup","drop"]
// const allAmenities = [...amenities,...additionalAmenities]
// console.log(allAmenities)

// const arr1=[1,2,3,4,5,6,7,8]
// const arr2=[...arr1,9,10,20,45]
// console.log(arr2)

// function sum(a,b,c){
//     return a+b+c;
// }
// const numbers =[1,4,6,9,23,89,56,78];
// const result =sum(...numbers);
// console.log(result);

//rest operator
//  function myfunc(a,b,c,...numbers){
//     console.log(numbers)

//  }
//  myfunc(1,2,3,4,5,6,7,8,9)

// const calculatefare=(basefare,...extracharges)=>{
//     return basefare+extracharges.reduce((total,charge)=>total+charge,0);
// }
// console.log(calculatefare(10000,50,20,10))


// const {x,y,...sharath}={x:1,y:2,a:3,b:5,c:null};
// console.log(sharath);

// const obj1={a:1,b:2};
// const obj2={...obj1,c:3,d:4};
// console.log(obj2);


// function multiply(x,y,z){
//     return x*y*z;
// }
// const numbers=[2,3];
// console.log(multiply(...numbers,4))



// function sum(a,b,...nulls){
//    return a+b+nulls.length;
// }
// console.log(sum(1,2,3,4,5));

// const word="travel";
// const letters=[...word];
// console.log(letters.length);

// const numbers =[10,20,5,89,56,43,56];
// const[first,secound,...rest]=numbers;
// const newnumbers=[5,...rest,90];
// console.log(newnumbers);

// const nums=[1,2,,4];
// const newnumbers=[...nums,5];
// console.log(newnumbers);












