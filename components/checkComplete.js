const checkComplete = (id) => {
   const i = document.createElement("i");
   i.classList.add("far", "fa-check-square", "icon");
   i.addEventListener("click", (event) => completeTask (event,id));
   return i;
}

const completeTask = (event, id) => {
   const element = event.target;
   element.classList.toggle("fas");     //toggle funciona como add o remove fijandose cuando está o no marcada una clase.
   element.classList.toggle("completeIcon");
   element.classList.toggle("far");
   const tasks = JSON.parse(localStorage.getItem("tasks"));
   const index = tasks.findIndex( item => item.id === id);   //findIndex devuelve el indice del array que cumple 
   console.log(index);
   tasks[index]["complete"] = !tasks[index]["complete"];  //accedo al index y dentro a la llave complete, y negamos lo que contiene
   console.log(tasks);
   localStorage.setItem("tasks",JSON.stringify(tasks));   //guardo la información de v o f en localstore.
}

export default checkComplete