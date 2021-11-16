'use strict';

import { data } from './repoData.js';
import { setAttributes, populatePage, generateIcon } from './utils.js';


console.log(data);
generateIcon(data[0], document.querySelector('#allianz-icons'));
generateIcon(data[1], document.querySelector('#allianz-images'));

// Select Element containing List of Partners
const partnerFilter = document.querySelector('#partnerList');
// Download Button for each element
const selectDownload = document.querySelectorAll('#allianz-js-download');
// Copy AWS Anchor Tag
const AWSCopyButton = document.querySelectorAll('.allianz-js-copy');



// Listen for change(s) on selection of Partner List 
partnerFilter.addEventListener('change', event => {
  //Pass in the selected value
  populatePage(selectDownload, partnerFilter.value);
});


// Downloads Functionality 
selectDownload.forEach(item => {
  
  item.addEventListener('change', event => {

    if (item.value !== "test") {
    // console.log(item[2]);
    // create anchor tag to be used in download
    let a = document.createElement('a');

    // set the file path to the value of the selected item
    let filePath = `./img/${item.value}`;

    // set the href to the file path
    a.href = filePath

    // adding a download attribute to the anchor tag
    a.setAttribute('download', "");

    // simulating a click to trigger download
    a.click();
    }

  });
});


// Copy link to ClipBoard
// Creating a loop to capture all the links to AWS
AWSCopyButton.forEach( item => {
  // Listening for a Click and ad an event to each element
  item.addEventListener('click', event => {

    // Stopping the default action of the anchor tag
    event.preventDefault();

      // saving the value of the .HREF value 
      let copyText = item.href;

      // Listening for a Copy command 
      document.addEventListener('copy', event => {

      // Saving the .HREF value as plain text
      event.clipboardData.setData('text/plain', copyText);
      event.preventDefault();
      }, true);

      // Executing the command top Copy 
      document.execCommand('copy');  
  });
});







