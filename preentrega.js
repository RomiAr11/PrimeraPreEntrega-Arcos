//Condicional para saber si es estudiante de este colegio 
let preguntaColegio = prompt("Usted asiste al IDFS. Responda si o no ")
console.log(preguntaColegio)
if (preguntaColegio == "si") [
    console.log("Bienvenido a la pagina, usted es estudiante")
]

let preguntaNombre = prompt("Ingrese su nombre y apellido")
let nombre = preguntaNombre
function saludarAlumno (saludarAlumno){
    console.log(`Hola alumno/a ${nombre}`)
}

saludarAlumno(nombre)

let CantidadNotas = parseInt(prompt("Ingrese la cantidad de notas"))
let total = 0 
for(let i = 1; i <=CantidadNotas; i++){
    let nota = parseInt(prompt("ingrese nota"))
    total = total + nota 
    console.log(`el total es ${total}`)
}
let promedio = total / CantidadNotas
console.log(`el promedio es ${promedio}`)