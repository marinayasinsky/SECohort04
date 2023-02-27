//1.0 Select and cache the <main>element in a variable named mainEl.
const mainEl = document.querySelector('main');
// 1.1 Set the background color of mainEl to the value stored in the --main-bgCSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";
//1.2 Set the content of mainElto <h1>SEI Rocks!</h1>.
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
//1.3 Add a class of flex-ctrto mainEl
mainEl.classList.add("flex-ctr");

// 2.0 Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");
// 2.1 Set the height topMenuEl element to be 100%.
topMenuEl.style.height = "100%";
// 2.2 Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// 2.3 Add a class of flex-aroundto topMenuEl.
topMenuEl.classList.add("flex-around");
// 2.4 Copy the following data structure to the top of script.js:
// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
// 3.1 Iterate over the entire menuLinks array and for each "link" object:
//Create an <a>element.

//    for (let link of menuLinks) {
//     let newLink = document.createElement("a");
//     // On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
//     newLink.setAttribute("href", link.href);
//     //Set the new element's content to the value of the text property of the "link" object.
//     newLink.textContent = link.text;
//     // Append the new element to the topMenuEl element.
//     topMenuEl.append(newLink);
//    }

menuLinks.forEach( obj => {

    const a = document.createElement('a');
   // On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
    a.setAttribute('href', obj.href);
    //Set the new element's content to the value of the text property of the "link" object.
    a.textContent = obj.text;
    // Append the new element to the topMenuEl element.
    topMenuEl.appendChild(a);

console.log(a);
})

console.log(topMenuEl);
console.log(mainEl);
console.dir(mainEl);

// 4.0 Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.
const subMenuEl = document.getElementById("sub-menu");

//4.1 Set the height subMenuElelement to be 100%.
subMenuEl.style.height = "100%";

//4.2 Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

//4.3 Add the class of flex-aroundto the subMenuElelement.
subMenuEl.classList.add("flex-around");

//4.4 Set the CSS positionproperty of subMenuElto the value of absolute.
subMenuEl.style.position = "absolute";

// //4.5 Set the CSS top property of subMenuElto the value of 0.
subMenuEl.style.top = "0";

//5.0 Update the menuLinksarray in script.js to this:

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//5.1 Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll("a");
//Declare a global showingSubMenuvariable and initialize it to false;
// let showingSubMenu = false;

//5.2 Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", (event) => {
  //The first line of code of the event listener function should call the event object's preventDefault()method.
  event.preventDefault();
  //The second line of code function should immediately return if the element clicked was not an <a>elemen
  if (event.target.tagName !== "A") {
    return;
  }
  //console.log the content of the <a>to verify the handler is working.
  console.log(event.target.textContent); 


// 5.3 Next in the event listener, if the clicked <a>link has a class of active:
// Remove the activeclass from the clicked <a>element.
// Set the showingSubMenuto false.
// Set the CSS topproperty of subMenuElto 0.
// returnto exit the handler.

if (event.target.classList.contains("active")) {
  event.target.classList.contains("active");
  showingSubMenu = false;
  subMenuEl.style.top = "0";
  return;
}

// 5.4 Next, the event listener should remove a class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.
//Hint: Removing a non-existent class from an element does not cause an error, so just remove it!
for ( let i = 0; i< topMenuLinks.length; i++) {
  topMenuLinks[i].classList.remove("active");
}

//5.5 Next, the event listener should add a class name of activeto the <a>element that was clicked.
event.target.classList.add("active");

//5.6 Set showingSubMenuto trueif the clicked <a>element's "link" object within menuLinkshas a subLinksproperty (all do, except for the "link" object for ABOUT), otherwise, set it to false.
//Hint: Saving the "link" object in a variable will come in handy for passing its subLinksarray in Task 5.7

const anchorName = event.target.textContent;
const menuLink = menuLinks.find((link) => {
  return link.text === anchorName;
});

if (menuLink === undefined) {
  return;
}

if (menuLink.sublinks) {
  showingSubMenu = true;
} else {
  showingSubMenu = false;
}

//5.7 Task 5.7
if (showingSubMenu) {
  buildSubMenu(linkData.subLinks);
  subMenuEl.style.top = '100%';
} else {
  subMenuEl.style.top = '0';
  mainEl.innerHTML = '<h1>about</h1>';
}
});

// Task 5.8
function buildSubMenu(subLinks) {
subMenuEl.innerHTML = '';
subLinks.forEach(function(link) {
  const linkEl = document.createElement('a');
  linkEl.setAttribute('href', link.href);
  linkEl.textContent = link.text;
  subMenuEl.appendChild(linkEl);
});
}

// Task 6.0
subMenuEl.addEventListener('click', function(evt) {
evt.preventDefault();
const link = evt.target;
if (link.tagName !== 'A') return;
console.log(link.textContent);
// Task 6.1
showingSubMenu = false;
subMenuEl.style.top = '0';
// Task 6.2
topMenuLinks.forEach(function(link) {
  link.classList.remove('active');
});
// Task 6.3
mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
});















