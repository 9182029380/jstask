async function fetchJobData() {
    const url = 'https://linkedin-jobs-api2.p.rapidapi.com/active-jb-24h?title_filter=%22java%20developer%22&location_filter=%22India%22';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '26f855ccbamsha097685c0e93011p1c0b75jsnec867037869f',
            'x-rapidapi-host': 'linkedin-jobs-api2.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        
        // Formatting the job data
        data.forEach(job => {
            console.log(`\n--- Job Details ---`);
            console.log(`Job ID: ${job.id}`);
            console.log(`Title: ${job.title}`);
            console.log(`Company: ${job.organization}`);
            console.log(`Location: India`);
            console.log(`Employment Type: ${job.employment_type || 'Not specified'}`);
            console.log(`Remote Option: ${job.remote_derived ? 'Yes' : 'No'}`);

            console.log(`\n--- Job Posting Details ---`);
            console.log(`Date Posted: ${job.date_posted}`);
            console.log(`Valid Through: ${job.date_validthrough}`);
            console.log(`Source: ${job.source}`);
            console.log(`Job URL: ${job.url}`);

            
            
            console.log(`\n--------------------------------------\n`);
        });

    } catch (error) {
        console.error("Error fetching job data:", error);
    }
}

// Call the function to fetch and display job data
fetchJobData();
