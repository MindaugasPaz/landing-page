/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// const navItem = document.querySelectorAll('section'); //gets all sections
const myCustomDiv = document.createElement('div');
const navigationBar = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// function getSectionName(){
//     const name = document.getElementsByTagName("section").getAttribute("data-nav");
// }


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
});

// build the nav
function buildNavBar(){
    document.addEventListener('DOMContentLoaded', function () {
        const sections = document.getElementsByTagName('section');
        for(let i = 0; i < sections.length; i++){
            const navItem = document.createElement('li');
            const name = sections[i].getAttribute('data-nav');
            const textOfNavigation = document.createTextNode(name);
            navItem.appendChild(textOfNavigation);
            navigationBar.appendChild(navItem);
        }
        // navigationBar.appendChild(navItem);
    });
}
buildNavBar();

// $( document ).ready(function() {
//     console.log( "ready!" );
// });

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


