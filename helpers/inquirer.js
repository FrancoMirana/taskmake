const { yellow } = require('colors');
const inquirer = require('inquirer');



const preguntas = [
    {

        type: 'list',
        name: 'opcion',
        message: 'que desea hacer',
        choices: [
            {
                value:'1',
                name:`${'1.'.yellow} Crear tarea`
            },
            {
                value:'2',
                name:`${'2.'.yellow} Listar`
            },
            {
                value:'3',
                name:`${'3.'.yellow} Listar tareas competadas`
            },
            {
                value:'4',
                name:`${'4.'.yellow} Listar tareas pendientes`
            }, 
            {
                value:'5',
                name:`${'5.'.yellow} Completar tareas`
            },
            {
                value:'6',
                name:`${'6.'.yellow} Borrar tareas`
            },
            {
                value:'0',
                name:`${'0.'.yellow} Salir`
            },
        ]

    }
];




const inquirerMenu = async () => {

    console.clear();
    console.log('============================='.green)
    console.log('>>>>TAREAS POR HACER<<<<'.green);
    console.log('Seleccione una opccion'.green)
    console.log('=============================\n'.green);

    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async ()=>{
    const ques= [
        {
            type:'input',
            name:'Continue',
            message:`\nPresione ${'ENTER'.green} para continuar \n`
    
        }
    ]

            await inquirer.prompt(ques);
}


const leerInput = async (message)=>{

const question =[

    {
        type:'input',
        name:'desc',
        message,
        validate(value){
            if(value.length === 0){
                return 'Ingrese un valor'
            }
            return true;
        }
    }
];
const {desc} =await inquirer.prompt(question);
return desc; 

}




;
module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    
}