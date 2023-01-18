const fs= require('fs');

const crearArchivo = async (base = 5)=>{
    try {
        console.log("===============================")
        console.log(`Tabla del ${base}`)
        console.log("===============================")

        let salida= '';
        for (let i = 0; i < 11; i++) {
            salida+= `${base} x ${i} = ${base*i} \n`;
            
        }
        
        console.log(salida)
        
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt creado`;
    } catch (error) {
        throw error;
    }
    
}

module.exports ={
    crearArchivo: crearArchivo
}