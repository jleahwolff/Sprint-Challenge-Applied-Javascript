//STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headerData = [
    {
    theDate: 'SMARCH 28, 2019',
    head: 'Lambda Times',
    temperature: '98°'
    }];


const headerEntry = document.querySelector('.header-container');

function Header(headerData) {
    //variables--------
    const headerDiv = document.createElement('div');
    //inside the div---
    const spanDate = document.createElement('span');
    const headerOne = document.createElement('h1');
    const spanTemp = document.createElement('span');
    //-----------------
    //classes----------
    headerDiv.classList.add('.header');
    spanDate.classList.add('.date');
    spanTemp.classList.add('.temp');
    //----------------
    //append----------
    headerDiv.appendChild(spanDate);
    headerDiv.appendChild(headerOne);
    headerDiv.appendChild(spanTemp);
    //----------------
    //text content----
    spanDate.textContent = headerData.theDate;
    headerOne.textContent = headerData.head;
    spanTemp.textContent = headerData.temperature;
    //----------------
    //entrypoint------
    headerEntry.appendChild(headerDiv);
    //----------------
    //return----------
    return headerDiv;
    //----------------
    };