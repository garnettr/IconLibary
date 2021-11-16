// Exporting the below Functions to App.JS
export { setAttributes, populatePage,  generateIcon };


/* A helper function that loops through and adds 
attributes to an element  */
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}


// populate page with selected partner icons
const populatePage = (element, partnerName) => {

  //Loop through every Icon elements download button 
  element.forEach( item => {

    // Add class of "show" to selected Partner Name 
    if (item.getAttribute('data-partner') == partnerName) {
      item.parentElement.className = "show";
    } 
    // If "all" add class of "show" to all elements
    else if (partnerName == "all") {
      item.parentElement.className = "show";
    }  
    // All remaining elements add class of hidden 
    else { 
      item.parentElement.className = "hidden";
    }
  }) 
}


const generateIcon = function(obj, container) {

   
    // Targeted container to hold created elements
    const appContainer = container;

    /* Destructuring the Object and saving it's keys as variables */
    for (const { altText: altText, awsLink: awsLink, imgSrc: imgSrc, iconName: iconName, partnerName: partnerName, 
      filePaths: filePaths } of obj) {

       // Create a New Div Element to house elements
       let newContainerDiv = document.createElement("div");
  
       // New IMG Element for Icon
       let newImg = document.createElement("img");
       // Loop through and add attributes 
       setAttributes(newImg, {"src": imgSrc, "alt": altText, "width": '100px', "height": '100px'});
  
       // New Label Element
       let newLabel = document.createElement("label");
        // Loop through and add attributes 
       setAttributes(newLabel, {"for": partnerName+"icon"});
       // Label Copy 
       newLabel.innerText = iconName;
  
       // New Select Element
       let newSelect = document.createElement("select");
        // Loop through and add attributes 
       setAttributes(newSelect, {"data-partner": partnerName, "name": partnerName+"-Icons", "id":
       "allianz-js-download"});
        
       /* The below For loop, takes 'filePaths' object and creates
       Option elements that are placed inside Select Element */
       
        for (const [key, value] of Object.entries(filePaths)) {
          // Create new Option element
          let newOption = document.createElement("option");
          // Loop through and add attributes 
          setAttributes(newOption, {"value": value});
          // Add text to Option 
          newOption.textContent = [key]
          // Append to Select element 
          newSelect.appendChild(newOption);
        }
  
       // New Anchor Element for AWS File Link 
       const newAnchor = document.createElement("a");
      // Loop through and add attributes 
       setAttributes(newAnchor, {"href": awsLink});
       // Add Class to Anchor
       newAnchor.className = "allianz-js-copy";
       // Add Inner Text
       newAnchor.textContent = "Copy Link to AWS";
  
     
       /* 
       Finally lets add the newly created elements and its content 
       inside of a Container Div
       */
       newContainerDiv.append(newImg, newLabel, newSelect, newAnchor);


      // Let's add that container to the App's Container 
       appContainer.append(newContainerDiv);
    }

};