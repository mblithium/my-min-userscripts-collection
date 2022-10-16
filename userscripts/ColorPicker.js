// ==UserScript==
// @name         Color Picker
// @version      0.1
// @description  Native color picker tools with <input type="color"> element.
// @author       mblithium
// @match        *
// @run-at       context-menu
// ==/UserScript==


function minBrowserColorPickerCloseModal() {
    if (document.querySelector("#minBrowserColorPickerModal")) { 
        document.querySelector("#minBrowserColorPickerModal").style.display = `none`
    }; };

(

function() {
    'use strict';

    function createModal() {

    
    let minBrowserColorPickerModal = document.createElement("div");
    minBrowserColorPickerModal.id = "minBrowserColorPickerModal";
    minBrowserColorPickerModal.innerHTML = `<h1 style="font-size: 12px; margin: 5px 0; padding: 0; display: block; color: white;">Color Picker: </h1>`

    let minBrowserColorPickerCloseModalBtn =  document.createElement("input");
    minBrowserColorPickerCloseModalBtn.type = "button";
    minBrowserColorPickerCloseModalBtn.value = "X";
    minBrowserColorPickerCloseModalBtn.style = `background-color: #eb4d4b; width: auto; border: 1px solid white; border-radius: 5px; color: white;`
    minBrowserColorPickerCloseModalBtn.addEventListener("click", minBrowserColorPickerCloseModal);
    minBrowserColorPickerModal.prepend(minBrowserColorPickerCloseModalBtn);


    let minBrowserColorPickerBtn = document.createElement("input");
    minBrowserColorPickerBtn.value = "#0E1525";
    minBrowserColorPickerBtn.type = "color";
    minBrowserColorPickerBtn.style = `border: none; padding: 0; margin: 2 0; display: inline-block;`;
    minBrowserColorPickerBtn.addEventListener("change", function () {
        minBrowserColorPickerResult.innerHTML = `HEX: ${minBrowserColorPickerBtn.value}`;
        document.querySelector("#minBrowserColorPickerModal").style.display = `block`;
        navigator.clipboard.writeText(minBrowserColorPickerBtn.value)
            .then(
                (success) => console.log("text copied"),
                (err) => console.log("error copying text")
            );
    });
    minBrowserColorPickerBtn.addEventListener("click", function () {
        document.querySelector("#minBrowserColorPickerModal").style.display = `none`;
    })

    minBrowserColorPickerModal.appendChild(minBrowserColorPickerBtn);

    let minBrowserColorPickerResult = document.createElement("span");
    minBrowserColorPickerResult.id = "minBrowserColorPickerResult";
    minBrowserColorPickerResult.innerHTML = minBrowserColorPickerBtn.value;
    minBrowserColorPickerModal.appendChild(minBrowserColorPickerResult);

    minBrowserColorPickerModal.style = `position: fixed; display: block; z-index: 99999999; width: auto; background-color: rgba(45, 52, 54, 1); top: 50px; left: 10px; border: 1px solid; border-radius: 5px; color: white; margin: 0; padding: 5px;`;

    document.body.prepend(minBrowserColorPickerModal);

    }

    if (!document.querySelector("#minBrowserColorPickerModal")) { createModal(); } 
    else { document.querySelector("#minBrowserColorPickerModal").style.display = `block`; }
    
}
  
)();
   
/* For more information: https://github.com/minbrowser/min/wiki/userscripts */