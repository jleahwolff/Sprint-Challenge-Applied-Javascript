// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function theCards(allData) {
    //big div variable
    const bigDiv = document.createElement("div");
    bigDiv.classList.add("card");
    
    //header div variable
    const headEr = document.createElement("div");
    headEr.classList.add("headline");
    
    //author div variable 
    const authorDiv = document.createElement("div");
    authorDiv.classList.add("author");
    const authorSpan = document.createElement("span");
    
    //img div variable
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    const imgSource = document.createElement("img");
    
    //text content and srcs
    headEr.textContent = allData.headline;
    authorSpan.textContent = allData.authorName;
    imgSource.src = allData.authorPhoto;
    
    //appending children
    bigDiv.appendChild(headEr);
    bigDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    imgContainer.appendChild(imgSource);
    authorDiv.appendChild(authorSpan);
    
    return bigDiv;
    } 

//axios get . then .forEach
    axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(res => {
    const cardsCont = document.querySelector(".cards-container");
    const holder = Object.values(res.data.articles);
        // console.log(holder)
    holder.forEach(item => {
        for (let object of item) {
    cardsCont.appendChild(theCards(object));
        }
        // console.log(items);
    });
    }); 