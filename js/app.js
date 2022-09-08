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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

const menu= `

   <div class="topnav">
    <li><a class="#active" href="#home">Home</a></li>
    <li><a href="#section 1" onclick="scrollFunction1()">  section 1 </a></li>
    <li><a href="#section 2"onclick="scrollFunction2()"> section 2 </a></li>
    <li><a href="#section 3" onclick="scrollFunction3()"> section 3 </a></li>
    <li><a href="#subscribe" onclick="scrollFunction4()"> subscribe </a></li>
    
    </div>
      `
   
document.getElementById("navbar").insertAdjacentHTML("afterbegin", menu);


// Scroll to section on link click

function scrollFunction1() {
    const section1 = document.getElementById("section1");
    section1.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
  }
  function scrollFunction2() {
    const section2 = document.getElementById("section2"); 
    section2.scrollIntoView({
      block: 'end',
      behavior: 'smooth',
      inline: 'center'
    });

  }
  function scrollFunction3() {
    const section3 = document.getElementById("section3"); 
    section3.scrollIntoView({
      block: 'end',
      behavior: 'smooth',
      inline: 'center'
    });

   }

   function scrollFunction4() {
    const section4 = document.getElementById("subscription"); 
    section4.scrollIntoView({
      block: 'end',
      behavior: 'smooth',
      inline: 'center'
    });

    }

//validate form with javascript

function validateForm()  
{  
var x=document.myform.email.value;  
var name = document.myform.name.value;
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  } else {
  alert("Congratulations " +name+"!" 
  + " you entered a valid email address!");
  return true;
}
}

// Set sections as active


var sectionBox = document.getElementById("myDIV");
var sections = sectionBox.querySelectorAll("section");

for (var i = 0; i < sections.length; i++) {
  sections[i].addEventListener("scroll", function() {
  var current = document.getElementsByClassName("section.your-active-class");
  current[0].className = current[0].className.replace(" section.your-active-class", "");
  this.className += "section.your-active-class";
  });
}



/*
const sections = document.querySelectorAll('section');

function sectionInViewPort(e) {
    return (e.getBoundingClientRect().distance.top >= 0);
}

function AddActiveClass() {
    for (s = 0; s <= sections.length; s++) {
//if section is in view port add class "your-active class"
        if (sectionInViewPort(sections[s])) {
            sections[s].classList.add("section.your-active-class");
            sections[s].classList.add("section.your-active-class .landing__container::before");
            sections[s].classList.add("section.your-active-class .landing__container::after");
//else remove it
        }else {
            sections[s].classList.remove("section.your-active-class");
            sections[s].classList.remove("section.your-active-class .landing__container::before");
            sections[s].classList.remove("section.your-active-class .landing__container::after");
        }
    }
}
document.addEventListener('scroll', AddActiveClass);



/*const sections = document.querySelectorAll("section");

sections.forEach(section => {
   section.addEventListner("scroll", function () {
    sections.forEach(sct => sct.classlist.remove('active'));
    this.classlist.add('active');
   });

});
*/