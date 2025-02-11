function fetchdata(url){
    return new Promise((resolve,reject)=>{
        fetch(url)
        .then(response=>{
            if(!response.ok){
                throw new Error(`http error ! status : ${response.status}`);
            }
            return response.json();
        })
        .then(x=>{
            resolve(x);
        })
        .catch(error=>{
            reject(error);
        });
    })
        
}
fetchdata("https://fake-json-api.mock.beeceptor.com/companies/100")
    .then(companies=>{
        console.log("companies",companies);
    })
    .catch(error=>{
        console.error("error fetching data",error);
    });