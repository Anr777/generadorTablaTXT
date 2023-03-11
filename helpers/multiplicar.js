
const fs = require('fs');
const colors = require('colors');


const crearArchivo = async( base = 5, listar = false, hasta=10) => {

    try {
        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }
        if( listar ) {
            console.clear();
            console.log('=================='.green)
            console.log(`  tabla del ${ base }  `)
            console.log('=================='.green)
            console.log(salida)
        }
    
        // fs.writeFile(`tabla-${ base }.txt`, salida, ( err )=> {
        //     if ( err ) throw err;
        //     console.log(`tabla-${base}.txt creado con exito`);
        // });
    
    
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
        return(`tabla-${ base }.txt`)
        
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo,
}