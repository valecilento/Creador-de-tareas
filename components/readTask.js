import { createTask } from "./addTask.js";
import { uniqueDates } from "./services/date.js";
import dateElement from "./dateElement.js";

export const readTask = () => {
   const list = document.querySelector("[data-list]");

   const taskList = JSON.parse(localStorage.getItem("tasks")) || []; //esto devuelve un objeto en formato JSON, para poder manipularlo usamos JSON.parse
   const dates = uniqueDates(taskList);

   
   dates.forEach(date => {
      console.log(date);
   });

   taskList.forEach((task) => {  //para recorrer las variable de tipo arreglo
      list.appendChild(dateElement(task.dateFormat)); 
      list.appendChild(createTask(task));   //recibe cada una de las tareas que existen en el arreglo y lo envía al createTask donde ejecuta y devuelve esa función
   });
};
