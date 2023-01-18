
const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function(){
        return `${this.nombre} ${this.apellido}`
    }
}

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// const {nombre, apellido, poder, edad=0} = deadpool;

function imprimeHeroe({nombre, apellido, poder, edad=0}){

    // const {nombre, apellido, poder, edad=0} = hero;
    console.log(nombre, apellido, poder, edad)
}


// imprimeHeroe(deadpool)

const heroes= ['Deadpool', 'Superman','Batman'];
// const h1=heroes[0]
// const h2 = heroes[1]
// const h3 = heroes[2]
const [h1,,h3]= heroes;
console.log(h1,h3)

//? ME gusta más esta forma
// const fruits = ['apple', 'banana', 'mango', 'orange'];

// console.log(fruits.at(0)); // apple
// console.log(fruits.at(2)); // mango
// console.log(fruits.at(-1)); // orange por si no sabemos el último parametro

// --------------------

// const fruits = ['apple', 'banana', 'mango', 'orange'];

// fruits.at(2) = 'pineapple';
// console.log(fruits); // ['apple', 'banana', 'pineapple', 'orange']

