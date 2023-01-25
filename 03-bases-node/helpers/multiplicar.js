const fs= require('fs');
const colors = require('colors')

const crearArchivo = async (base = 5, listado=false, maximo=10)=>{
    try {


        let salida = '';
        let consola = '';
        for (let i = 0; i <= maximo; i++) {
            salida+= `${base} x ${i} = ${base*i} \n`;
            consola+= `${base} ${'x'.yellow} ${i} ${'='.green} ${base*i} \n`;
            
        }
        if (listado) {
            
            console.log("===============================".green)
            console.log(`        Tabla del:`.green, colors.blue(base))
            console.log("===============================".green)

            console.log(consola)
        }
        
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt creado`;
    } catch (error) {
        throw error;
    }
    
}

module.exports ={
    crearArchivo: crearArchivo
}