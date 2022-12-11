const deleteIcon = () => {
   const i = document.createElement("i");
   i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
   i.addEventListener("click", deleteTask);                      //tiene dos parámetros, click y la función deleteTask
   return i;
}
const deleteTask = (event) => {
   const parent = event.target.parentElement;  //los toma por los padres, como elementos independientes
   parent.remove();                              //elimina la tarjeta seleccionada
}

export default deleteIcon