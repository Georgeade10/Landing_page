
/**
 * Define Global Variables
 * Sections stores all the data-nav (All Sections)
 * navList stores all element in the navbar
*/ 
const sections = document.querySelectorAll("[data-nav]");
const navList = document.querySelector("#navbar__list");

/**Build menu
 * forEach looped into all the sections
 * @Item @link stores created li and a respectively
 * @title @target stores data-nav and id
 * @item is appended to navList
 * @link is appended to item
 * textContent is fetched from stored title value
 * link attributes and a class list is added to every created nav element 
 * function is called on DOMContentLoaded 
*/
function buildNav() {
  sections.forEach((section) => {
    const [item, link] = [
      document.createElement("li"),
      document.createElement("a"),
    ];
    const [title, target] = [
      section.getAttribute("data-nav"),
      section.getAttribute("id"),
    ];
    navList.appendChild(item);
    item.appendChild(link);
    link.textContent = title;
    link.setAttribute("href", `#${target}`);
    link.setAttribute("data-nav", `${target}`);
    link.classList.add("menu__link");
  });
}
document.addEventListener("DOMContentLoaded", buildNav);

/* Scroll to section on link click
* on click, scrollFunctions activates a smooth scroll view 
to the target.dataset.nav
*/
function scrollFunction(scroll) {
  scroll.preventDefault();
  if (scroll.target.dataset.nav) {
    document
      .getElementById(`${scroll.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth", duration: 3000 });
  }
}
navList.addEventListener("click", scrollFunction);

/* SetActive function for sections 
* forEach function looped into every section
* move stores with screen size/dimensions of each section.
* if statement was employed to add the class list of your-active-class
*  else was used to remove classlist
* Function is called on scroll to the section

*/
function setActive() {
  sections.forEach((section) => {
    const move = section.getBoundingClientRect();

    const activeLink = navList.querySelector(`[data-nav=${section.id}]`);
    if (move.top <= 150 && move.bottom >= 150) {
      section.classList.add("your-active-class");
      activeLink.classList.add("active-link");
    }
     else {
      section.classList.remove("your-active-class");
      activeLink.classList.remove("active-link");
    }
  });
}
document.addEventListener("scroll", setActive);

/* validate form with javascript
*function validates the email value
*var x is the email value
* atposition and dotposition are used to determine @ and . input value on email
*function coded to return alert when email is valid and in valid 
*/
function validateForm()  
{  
const x=document.myform.email.value;  
const name = document.myform.name.value;
const atposition=x.indexOf("@");  
const dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  } else {
  alert("Congratulations " +name+"!" 
  + " you entered a valid email address!");
  return true;
}
}
