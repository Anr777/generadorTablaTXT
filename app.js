const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs')


// PRIMERA FORMA DE HACERLO
// const [ ,, arg3 = 'base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split('=')


console.clear();
// console.log( argv )
// console.log('base: yargs', argv.base);

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.blue, 'creado'))
    .catch( err => console.log( err ));

