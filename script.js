//store the content class in the content variable
const content = document.querySelector('.content');
//store the creation of the p element in the variable redpara
//<p> with red text that says “Hey I’m red!”
const redpara = document.createElement('p');
//dom manipulation(insert text and color)
redpara.textContent = "Hey, I'm red!";
redpara.style.color = "red";


//<h3> with blue text that says “I’m a blue h3!”
const headthree = document.createElement('h3');
headthree.textContent = "I'm a blue h3!";
headthree.style.color = "blue"

//create a div
const divtwo = document.createElement('div');
//divtwo.style.borderColor = "black";
//divtwo.style.background = "pink";
divtwo.setAttribute('style', 'background: pink; border: black 1px solid');

//another <h1> that says “I’m in a div”
const headone = document.createElement('h1');
headone.textContent = "I'm in a div";

//a <p> that says “ME TOO!”
const anotherp = document.createElement('p');
anotherp.textContent = "ME TOO!";


//Add a node at the end of the list of children of a specified parent node
content.appendChild(redpara);
content.appendChild(headthree);
divtwo.appendChild(headone);
divtwo.appendChild(anotherp);
content.appendChild(divtwo);