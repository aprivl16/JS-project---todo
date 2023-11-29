"use strict"

const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
const listPlace = document.querySelector(".list-place");

function press() {

	let toDo = document.createElement("div");
	let buttons = document.createElement("div");
	let comp = document.createElement("button");
	let del = document.createElement("button");

	toDo.innerHTML =  input.value;
	comp.innerHTML = " <img src= \"../img/empty1.jpg\" alt= \"\" width = \"25px\" height = \"25px\" >";
	del.innerHTML = " <img src= \"../img/bin.png\" alt= \"\" width = \"25px\" height = \"25px\" >";

	comp.classList.add("b");
	del.classList.add("b");
	toDo.style.textTransform = 'uppercase';

	comp.addEventListener("click" , () => {
		comp.innerHTML = " <img src= \"../img/checked.png\" alt= \"\" width = \"25px\" height = \"25px\" >";
	})

	del.addEventListener("click" , () => {
		toDo.remove();
	})	
	

	buttons.append(comp, del);
	toDo.append(buttons);
	toDo.classList.add("a");
	listPlace.append(toDo);
}


submit.addEventListener("click", press);

input.addEventListener("keydown",  function(event){
	if(event.key == "Enter"){
		press();
	}
});
