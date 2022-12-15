

require('colors');
const { clearScreenDown } = require('readline');
//const {mostrarMenu} = require('./helpers/mensajes');
//const { pausa } = require('./helpers/mensajes');
const {
  inquirerMenu,
  pausa,
  leerInput
} = require('./helpers/inquirer');
const Tarea = require('./models/Tarea');
const Tareas = require('./models/Tareas');
const {
  saveBD,
  readFile

} = require('./helpers/createFile');

console.clear();

const main = async () => {
  let opt = '';

  const ts = new Tareas();

  const tareasDB = readFile();

  console.log("INICIA APP");

  if (tareasDB) {
 
    //establecer tareas
    ts.cargarTarea(tareasDB);
 
  }


 
  do {

    opt = await inquirerMenu();//se usa la promesa de inquirer que retorna una opcion al menu de preguntas
    console.log("se escogio la opcion :" + opt);

    switch (opt) {
      case '1':

        const desc = await leerInput("Descripción:");//se lee la descripcion de la tarea
        ts.crearTarea(desc);// se usa la instancia tarea y se genea con su deacripcion
      
        break;
      case '2':
        //se list el arreglo ya se el de objetos o la lista de tarea guardada en nmemoria

      
       await ts.listarTareas();
       break;

       case '3':
        await ts.listarTareasCompletadas();
      
      break;
      case '4':
        await ts.listarTareasPendientes();
      
      break;


    
      case '6':
       
     await ts.borrarTareas();

        break;
        
    }

    saveBD(ts.listadoArr);
    await pausa();



  } while (opt != '0');

}


main();


