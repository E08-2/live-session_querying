// * Note: usually it is better to group all your variables together, at the top of your JS file
// * However, as this is your first introduction to querying, we will take a step-by-step approach this time
// * This means that, one-by-one, we will select a HTML element type, and then use JS to change its styling

// 1. Change the font-family of the body element. 
const body = document.querySelector("body");
body.style.fontFamily = "Arial";

// 2. Center the text of the h1 on the page.
const title = document.querySelector(".title");
title.style.textAlign = "center";

// 3.The menu headings have a class named "category". Select the elements by the class name. Then, change the elements to match the reference images.
const menuCategories = document.querySelectorAll(".category");  // Creates an array containing references to all matching elements
// Change the style of each element referenced in the array by looping through the array
menuCategories.forEach(({ style }) => {
    style.fontSize = "2rem";
    style.fontStyle = "italic";
    style.marginLeft = "1rem";
    style.borderBottom = "1px solid black";
});

// 4. Select the unordered lists with the class of "food-category". Style each list to look like the reference images.
const foodCategories = document.querySelectorAll(".food-category");

// Do the same as the previous forEach loop...
// ... however this time also add "index" as a second parameter
// This will allow us to "keep track" of the array index of each element while we loop through them
foodCategories.forEach(( { style }, index ) => {
    style.minWidth = "300px";
    style.height = "10rem";
    style.borderRadius = "5px";
    
    // If we are in the first index of the array...
    if (index === 0) {
        // Set the correct background color
        style.backgroundColor = "rgb(232, 196, 172)";
    }
    // Else if we are in the second index of the array... 
    else if (index === 1) {
        // Set the correct background color
        style.backgroundColor = "rgb(240, 196, 244)";
    // Else we are in the third index of the array...
    } else {
        // So set the correct background color 
        style.backgroundColor = "rgba(248, 172, 172)";
    }
});

// 5. Align the "food-category" lists in a row on desktop. Make sure that the page is responsive and also works on mobile.
const mainSection = document.querySelector(".main");
mainSection.style.display = "flex";
mainSection.style.flexFlow = "row wrap";
mainSection.style.justifyContent = "space-around";
mainSection.style.boxSizing = "border-box";

// 6. Change the styling of the "food-item" elements to match the desktop reference image.
const foodItems = document.querySelectorAll(".food-item");
foodItems.forEach(({ style }) => {
    style.marginTop = "1rem";
    style.marginLeft = "1rem";
});

// 7. Select the warning at the end of the page by its id "warning". Select the id without using a querySelector. Change the font-size and margin of the warning.
// * Note: we are now using "document.getElementById", rather than document.querySelector!
const warning = document.getElementById("warning");
warning.style.fontSize = "1.5rem";
warning.style.marginLeft = "1.5rem";
warning.style.marginBottom = "0";

// 8. Select the "allergies" list and restyle it to look like the desktop reference image.
const allergyList = document.querySelector(".allergies");
allergyList.style.width = "18vw";
allergyList.style.listStyle = "none";
allergyList.style.marginTop = "1rem";
allergyList.style.paddingLeft = "0";

// 9. Select all even "allergy-info" items. Give the even items a different background color.
const allergyItems = document.querySelectorAll(".allergy-info");
allergyItems.forEach(({ style }, index) => {
    // If we are in an even index of the array, give the current element a background-color of "skyblue"
    if (index % 2 == 0) {
        style.backgroundColor = "skyblue";
    }
});

// 10. Make the "allergy-warning" appear as a column in the center of the page.
const allergySection = document.querySelector(".allergy-warning");
allergySection.style.display = "flex";
allergySection.style.flexFlow = "column";
allergySection.style.justifyContent = "center";
allergySection.style.alignItems = "center";

// 11. The descriptions in the footer should also be styled to look like the desktop reference image.
const footer = document.querySelector(".footer");
footer.style.display = "flex";
footer.style.flexFlow = "row wrap";
footer.style.justifyContent = "center";

const footerDescriptions = document.querySelectorAll(".food-desc");
footerDescriptions.forEach(( { style } ) => {
    style.border = "5px solid orange";
    style.borderRadius = "100%";
    style.height = "7rem";
    style.width = "7rem";
    style.margin = "1rem";
    style.display = "flex";
    style.alignItems = "center";
    style.justifyContent = "center";
});