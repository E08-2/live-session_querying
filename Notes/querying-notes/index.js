// * JAVASCRIPT QUERYING

// * 1. querySelector()

// A simple way of targeting an element in a HTML page, in this case using the "document" object.
// Choose the selector you want to target inside the parenthesis ( )
// This will return the first Element within the document which matches the chosen selector

const body = document.querySelector("body");
//         Note: camel case!
body.style.fontFamily = "Arial";

// Note: using querySelector will return only the first element found matching the selector!

// ==========================================================

// * 2. What happens if we want to target more than one element at the same time?

const paragraphs = document.querySelectorAll("p");
const divs = document.querySelectorAll("div");

// When we log this variable, we find it is of type "NodeList"
console.log("!", paragraphs);

// ? What is a NodeList?

// A NodeList is a collection of document nodes
// A "node" in this context is simply a HTML element
// The DOM (Document Object Model) is a tree structure that represents the HTML of the page and all its nodes
// * So you can think of a NodeList as an array - of HTML elements!

// ! So this syntax, which is like using querySelector (see line 11) won't work!
// * Instead, we have to access the elements INSIDE the array in order to change them!
// paragraphs.style.color = "red";

// ? So how can we access the elements inside the array?
// * A for loop!

//#region Extra discussion about destructuring
/* Quick pseudocode to show why we can use object destructuring to save time in our forEach loop...

STEP 1 - The "paragraphs" array:

paragraphs = [
    <Element />,
    <Element />
]

STEP 2 - What each Element looks like:

Element = {
    style: ...,  <-- We just want to grab this property - none of the others!
    prop2: ...,
    prop3....

}
*/
//#endregion

// In the below example...
// We loop through "paragraphs" (the array of elements created by the querySelectorAll in line 19)
// Every time we find a new element, we change its style
paragraphs.forEach(({ style }, index) => {
    // In this case, we are using the index of each element inside the array to decide the style it should get!
    // Even index = big, blue, border
    // Odd index = red text
    if (index % 2 === 0) {
        style.fontSize = "4rem";
        style.fontStyle = "italic";
        style.border = "2px solid blue";
    } else {
        style.color = "red";
    }
});

// ======================================

// * Class challenges!

// 1. Select the div...
const div = document.querySelector("div");
// 2. Change the color of the div text to purple:
div.style.color = "purple";

// 3. Select the footer using its ID
const footer = document.querySelector("#myFooter");
// 4. Give the footer we just selected a border
footer.style.border = "solid 2px red";

// 5. Select all elements with the "myDiv" CLASS
const myDivs = document.querySelectorAll(".myDiv");
// 6. Give all "myClass" elements a blue text color
myDivs.forEach(({ style }, index) => {
    style.color= "blue";
});

// ===========================================================

// * 3. What about other methods we can use to select elements by class or ID?

// Selecting by ID can also be done with the method getElementById...
// Remember: this method knows it is looking for an id, so no hash needed in the selector!
const footerTwo = document.getElementById("myFooter");

// Selecting by class can also be done with "document.getElementsByClassName"!