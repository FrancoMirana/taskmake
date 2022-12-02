
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const archivo =`./Base/BD.js`;




const saveBD = (data) => {
    return promesa = new Promise((resolve, rejects) => {
        let texto= JSON.stringify(data);
        try {
            fs.writeFileSync(archivo, texto);
            resolve('Archivo creado')
        } catch (error) {
            console.log(error);
            rejects(error)
        }
    })
}



const readFile = () => {  
            if (!fs.existsSync(archivo)) {
                return null;
            }
            const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
            const bdjs= JSON.parse(info);
           console.log(info);
           return bdjs;
    };



module.exports = {
    saveBD,
    readFile
}
