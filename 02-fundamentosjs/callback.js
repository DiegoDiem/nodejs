
// Callback llamar una función
// setTimeout(() => {
//     console.log('Hola mundo')
// }, 1000);


const getUsuarioByID = (id, callback)=>{

    const user ={
        id,
        nombre: 'Diego'
    }

    setTimeout(() => {
        callback(user)
    }, 1500);

}

getUsuarioByID(10, ( usuario )=>{ 
    console.log(usuario)
    console.log(usuario.nombre.toUpperCase())
 })