const { v4: uuidv4 } = require('uuid');
class Tarea {

    id = '';
    desc = '';
    completadoEn = 'PENDIENTE';

    constructor(desc) {
        let guid=uuidv4()
        this.id = guid.split('-')[0]
        this.desc = desc;

    }
}



module.exports = Tarea;