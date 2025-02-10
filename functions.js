//function declartion 

// function calculateFlightcost(basefare,tax){
//     return  totalfare = basefare + tax;
// }
// console.log(calculateFlightcost(5000,1500))

// const getdestinations=function(){
//     return ["paris","newyork","dubai"];
// }
// console.log(getdestinations())

//Arrow function 

// const isflightavaiable=(destionation)=>destionation==="paris"
// console.log(isflightavaiable("paris"))

//IIFE(immediately invoked function expression)

// (function(){
//     console.log("hello world")
// })();

//generator function 

// function * travelItinerary(){
//     yield "book flight";
//     yield "pack bags";
//     yield "check in";
//     yield "board flight";
//     yield "land";
// }
// const travel=travelItinerary()
// console.log(travel.next().value);
// console.log(travel.next().value);
// console.log(travel.next().value);
// console.log(travel.next().value);
// console.log(travel.next().value);
// console.log(travel.next().value);
// console.log(travel.next().value);

async function * fetchFlights(page=1){
    const baseurl = `https://api.example.com/flights?page=`;

    while (page<=5){
        const response = await fetch(baseurl + page);
        const data = await response.json();
        yield data;
        page++;
    }
}
(async()=>{
    const flights = fetchFlights();
    for await (const flight of flights) {
        console.log("flights on this page is :",flight);
    }
})();
