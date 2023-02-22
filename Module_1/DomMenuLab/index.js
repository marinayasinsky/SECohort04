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