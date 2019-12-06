// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const tabsEntry = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    theTabs(response.data)
    console.log(response.data);
    console.log(response)
})
.catch(err => {
    console.log(err)
});

function theTabs (data){
//variables
const divTabs = document.createElement('div');
const divTopics = document.createElement('div');
const divTab = document.createElement('div');
const spanTitle = document.createElement('span');

//class list
divTabs.classList.add('tabs');
divTopics.classList.add('topics');
divTab.classList.add('tab');
spanTitle.classList.add('title');

//appending
divTabs.append(divTopics);
divTopics.append(spanTitle);
divTopics.append(divTab);

//text content
spanTitle.textContent = `Trending Topics:`;
divTab.textContent = data.topics;

tabsEntry.append(divTopics);
console.log(divTopics);
return divTopics;
};

