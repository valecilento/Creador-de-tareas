import { createTask } from "./addTask.js";
import { uniqueDates, orderDates } from "./services/date.js";
import dateElement from "./dateElement.js";

export const readTask = () => {
   const list = document.querySelector("[data-list]");

   const taskList = JSON.parse(localStorage.getItem("tasks")) || []; //esto devuelve un objeto en formato JSON, para poder manipularlo usamos JSON.parse
   const dates = uniqueDates(taskList);
   orderDates(dates);

   dates.forEach(date => {
      const dateMoment = moment(date, "DD/MM/YYYY");
      list.appendChild(dateElement(date)); 
      taskList.forEach((task) => {  //para recorrer las variable de tipo arreglo
         const taskdate = moment(task.dateFormat, "DD/MM/YYYY");

         const diff = dateMoment.diff(taskdate);            //compara las diferentes fechas de cada tarea
         if (diff === 0) {   //si las fechas de cada tarea coinciden
            list.appendChild(createTask(task));   //recibe cada una de las tareas que existen en el arreglo y lo envía al createTask donde ejecuta y devuelve esa función
         }
         
      });
   });

  
};
