async function fetchdata() {
    try {
        const response = await fetch('https://dummy-json.mock.beeceptor.com/todos');
        const data = await response.json();
        const completedTasks = data.filter(task => task.completed === true);
        console.log(completedTasks);
    } catch (error) {
        console.log(error);
    }
}
fetchdata();
