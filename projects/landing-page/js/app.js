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
const sections = document.getElementsByTagName('section');
const currentSectionArray = Array.from(sections);

document.addEventListener('DOMContentLoaded', function () {
    buildNavBar();
});

// build the nav
function buildNavBar(){
       
        for(let i = 0; i < sections.length; i++){
            const navItem = document.createElement('li');
            const name = sections[i].dataset.nav;

            let sectionId = sections[i].getAttribute('id');
            const linkItem = document.createElement('a')
            linkItem.href = '#' + sectionId; //adds anchor
            navItem.onclick = function() {
                event.preventDefault();
                document.getElementById(sectionId).scrollIntoView({
                    behavior: 'smooth'
                });
            };

            const textOfNavigation = document.createTextNode(name);
            navItem.appendChild(linkItem);
            linkItem.appendChild(textOfNavigation);
            navigationBar.appendChild(navItem);
        }
}
//check if element is in viewport (https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/)
function isElementInViewport (currentSection) {
    return (
        currentSection.top >= 0 &&
        currentSection.left >= 0 &&
        currentSection.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        currentSection.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
};

function handler() {
    const navBarLinks = document.getElementsByClassName('navbar__link');
    for(let i = 0; i < sections.length; i++) {
        const currentSection = currentSectionArray[i].getBoundingClientRect();
        if (isElementInViewport(currentSection)) {
              (sections[i].classList.add('your-active-class'));
         } else {
               sections[i].classList.remove('your-active-class');
         }
     }
}
//event to check which section is visible
window.addEventListener('scroll', handler, false);