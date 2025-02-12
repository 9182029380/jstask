const url = 'https://jsearch.p.rapidapi.com/search?query=developer%20jobs%20in%20india&page=1&num_pages=1&country=us&date_posted=all';

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '1b0bba7280msh423a6d7c8e0c402p1e7f1ajsnca37ac4bcc98',
        'x-rapidapi-host': 'jsearch.p.rapidapi.com'
    }
};


async function fetchJobData() {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        // Extract only the 'data' array
        const jobData = result.data;
        
        console.log("Job Data:", jobData);
    } catch (error) {
        console.error("Error fetching job data:", error);
    }
}


fetchJobData();
