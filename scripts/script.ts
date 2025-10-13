//Ejemplos de TypeScript (El copilot me detecta lo que pienso, ayuda)

console.log('Hola mundo');

let variable: 'coche' | 'automovil' | 'moto' | number= 'coche';
variable = 7;
console.log('variable',variable);

const hobbies: string[] = ['correr', 'pintar', 'cantar'];
const hobbiesExtra=['bailar']
const hobbies2= hobbies;
const hobbies3= [...hobbies];
hobbies.push(...hobbiesExtra);
console.log(hobbies2);
console.log(hobbies3);

type personType={
    nombre: string,
    apellido: string,
    edad?: number
}

let person: personType;

let person2:personType= {
    nombre:'Paco',
    apellido:'Pérez',
    edad: 18
}

person2={nombre:'Luis', apellido:'Martínez', edad:12};
person= person2;

async function saluda(nombre:string){
   await setTimeout(()=>{console.log('Fin setTimeout')},10000);
    console.log('Hola ',nombre,' te saludo');
}



async function saluda2({nombre, edad=0}:{nombre:string, edad?:number}){
await saluda(nombre)

if (edad){
console.log('Tu edad es ',edad)
}
}

saluda(person.apellido);
saluda2(person);

async function sleep(label:string){
    await setTimeout(()=> console.log('El label es ',label ),3000);
    return 'terminó';
}

function muestra(mensaje:string){
    console.log('El mensaje es ', mensaje)
}

try{
    const mensaje=sleep('prueba async')
}catch(error){
    console.log('Error capturado', error)
}

sleep('Valor label').then((a:string)=> {muestra(a); console.log('Fin')});



//await y async