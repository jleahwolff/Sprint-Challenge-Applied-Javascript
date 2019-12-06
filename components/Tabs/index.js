// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function theTabs (data){
    //create the element
    const divTab = document.createElement('div');
    //set the element
    divTab.classList.add('tab');
    divTab.textContent = data;
    //style the element

    document.querySelector('.topics').appendChild(divTab)
    
    // console.log(divTopics);
};

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    response.data.topics.forEach(item => {
        theTabs(item)
    })
})
.catch(err => {
    console.log(err)
});