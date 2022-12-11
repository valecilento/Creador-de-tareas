const checkComplete = () => {
   const i = document.createElement("i");
   i.classList.add("far", "fa-check-square", "icon");
   i.addEventListener("click", completeTask);
   return i;
}

const completeTask = (event) => {
   const element = event.target;
   element.classList.toggle("fas");     //toggle funciona como add o remove fijandose cuando está o no marcada una clase.
   element.classList.toggle("completeIcon");
   element.classList.toggle("far");
}

export default checkComplete