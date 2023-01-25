
const {crearArchivo } = require('./helpers/multiplicar')
const colors = require('colors')
const argv=require('./config/yargs')


console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err))

// console.log(argv);
// console.log('base: yargs',argv.b );





//! Forma nativa
// const [,,arg3 = 'base=5']= process.argv
// const [,base] = arg3.split('=')
// console.log(base);
// const base = 6;
// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err))
