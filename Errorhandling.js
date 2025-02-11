class travelbooking{
    constructor(){
        this.booking=[];
    }
    bookflight(passengername,destination,paymentstatus){
        try{
            if(!passengername){
                throw new Error("Passenger name is required");
            }
            if(!destination){
                throw new Error("Destination is required");
            }
            if(paymentstatus!=="paid"){
                throw new Error("Payment status must be paid");
            }

            const booking={
                passengername,
                destination,
                status:"confirmed",

            };
            this.booking.push(booking);
            console.log(`✅ Booking Confirmed for ${passengername} to ${destination}`);
            return booking;
        }catch(error){
            console.error(`❌ Booking Failed: ${error.message}`);
            return {error:error.message};
        }
    }
}

const travelsystem =new travelbooking();
travelsystem.bookflight("John Doe","New York","pending");
