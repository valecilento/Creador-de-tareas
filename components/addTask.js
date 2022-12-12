import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { readTask } from "./readTask.js";
import { uniqueDates } from "./services/date.js";

export const addTask = (evento) => {
   evento.preventDefault();
   const list = document.querySelector("[data-list]");
   const input = document.querySelector("[data-form-input]");
   const calendar = document.querySelector("[data-form-date]");

   const value = input.value;
   const date = calendar.value;
   const dateFormat = moment(date).format("DD/MM/YYYY"); //usa la libreria moment

   if (value === "" || date === ""){  //si no se declara tarea ni fecha no sigue el curso de la función
      return;
   }
   
   input.value = ""; // limpiamos el input
   calendar.value = ""; // limpiamos el calendario

   const complete = false;   //para ver si una tarea está completada, inicia en falso

   const taskObj = {
      value,
      dateFormat,
      complete,
      id: uuid.v4()
   };
   list.innerHTML = "";  // inicializa en 0

   const taskList = JSON.parse(localStorage.getItem("tasks")) || [];   //recibe como parámetro el nombre de la llave (tasks), recibe lo que está almacenado en localstore en caso de que sea null lo que recibe lo que hace es darle un valor por defecto (el arreglo vacío). Para leerlo usa el JSON.parse (genera un objeto en formato javascript).
   taskList.push(taskObj);  //agrega la nueva tarea
   localStorage.setItem("tasks", JSON.stringify(taskList));  // dos parámetros: llave y objeto o valor.
   readTask(); //agrega las tareas a la lista

}



export const createTask = ({value, dateFormat, complete, id}) => {  //recibe el texto y la fecha que coloca el usuario, verifica si el complete el v o f
   const task = document.createElement("li");
   task.classList.add("card");
 
   const check = checkComplete(id);
   if (complete) {

      check.classList.toggle("fas");     
      check.classList.toggle("completeIcon");
      check.classList.toggle("far");
   }

   const taskContent= document.createElement("div");
   const titleTask = document.createElement("span");
      taskContent.appendChild(check);
      titleTask.classList.add("task");
      titleTask.innerText = value;
      taskContent.appendChild(titleTask);

   const dateElement = document.createElement("span");
      dateElement.innerHTML = dateFormat;
      task.appendChild(taskContent);
      task.appendChild(dateElement);
      task.appendChild(deleteIcon(id));
   return task;
}