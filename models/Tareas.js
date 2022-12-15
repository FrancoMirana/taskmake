const Tarea = require("./Tarea");
const inquirer = require('inquirer');
  const { yellow } = require('colors');
const { leerInput, pausa } = require("../helpers/inquirer");
class Tareas {

    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);

        });
        return listado;


    };



    constructor() {
        this._listado = {};
    }



    cargarTarea(tareas = []) {

        tareas.forEach((tarea = []) => {

            this._listado[tarea.id] = tarea

        })

    }




    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    async listarTareas() {
       
        let choices = [];
        let cont = 1;
        let valor;
        for (let lista of this.listadoArr) {

           // if (lista.desc == null)  valor = "PENDIENTE";

           valor=lista.completadoEn==null?"PENDIENTE".red:"COMPLETADA".green;
           


            
            choices.push({ value:`${cont}`, name: `${cont}. `.green+`${lista.desc}`+` ::${valor}` });
            cont++;
           
        }

        let question = {
            type: 'list',
            name: 'opcion',
            message: 'Se selecciono la siguiente tarea',
            choices
        };
        
        



    };

    


    async borrarTareas() {
        let tareas = [];
        let choices = [];
        let cont = 1;
        let valor;
        for (let lista of this.listadoArr) {

           // if (lista.desc == null)  valor = "PENDIENTE";

           valor=lista.completadoEn==null?"PENDIENTE".red:"COMPLETADA".green;
           


            
            choices.push({ value:`${cont}`, name: `${cont}. `.green+`${lista.desc}`+` ::${valor}` });
            cont++;
           
        }

        let question = {
            type: 'list',
            name: 'opcion',
            message: 'que desea hacer',
            choices
        };
        const {opcion} = await inquirer.prompt(question);
        console.log("este "+opcion);
        

    };

    async listarTareasCompletadas() {
        let tareas = [];
        let choices = [];
        let cont = 1;
        let valor;
        for (let lista of this.listadoArr) {

           // if (lista.desc == null)  valor = "PENDIENTE";

           valor=lista.completadoEn==null?"PENDIENTE".red:"COMPLETADA".green;
           


            if(lista.completadoEn== true){
            choices.push({ value:`${cont}`, name: `${cont}. `.green+`${lista.desc}`+` ::${valor}` });
            cont++;
        }
           
        }

        let question = {
            type: 'list',
            name: 'opcion',
            message: 'que desea hacer',
            choices
        };
        const {opcion} = await inquirer.prompt(question);
        console.log("este "+opcion);
        

    };

    async listarTareasPendientes() {
        let tareas = [];
        let choices = [];
        let cont = 1;
        let valor;
        for (let lista of this.listadoArr) {

           // if (lista.desc == null)  valor = "PENDIENTE";

           valor=lista.completadoEn==null?"PENDIENTE".red:"COMPLETADA".green;
           


            if(lista.completadoEn== null){
            choices.push({ value:`${cont}`, name: `${cont}. `.green+`${lista.desc}`+` ::${valor}` });
            cont++;
        }
           
        }

        let question = {
            type: 'list',
            name: 'opcion',
            message: 'que desea hacer',
            choices
        };
        const {opcion} = await inquirer.prompt(question);
        console.log("este "+opcion);
        

    };

}

module.exports = Tareas;