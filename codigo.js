//magia
alert(`Vamos a jugar!!`);

let nombre = prompt(`¿Cuál es tu nombre?`);
alert(`${nombre} elige un numero par entre el 1 y el 9`);
alert(`No lo olvides ${nombre}, pero multíplicalo por 6`);

let decena = parseInt(prompt(`Ahora, sólo dime la cifra de las decenas que te dió`));
let unidad = decena * 2;
let operacion = "" + decena + unidad;

alert(`${nombre} el resultado de tu operación fue ${operacion} y el número que elegiste el ${unidad}`);

//helado
alert(`Ahora vamos a la heladería`);

let dinero = parseFloat(prompt(`¿Cuánto dinero tienes ${nombre}? A ver que podés comprar (que sea un valor entre 0 y 100)`));
if (dinero >= 15 && dinero < 30) {
  alert(`${nombre} comprate un helado de agua, y te sobra $${dinero - 15}`);
}
else if (dinero >= 30 && dinero < 60) {
  alert(`${nombre} comprate un "helaDito" de crema de un gusto, y te sobra $${dinero - 30}`);
}
else if (dinero >= 60 && dinero < 90) {
  alert(`${nombre} comprate un "helaDaso" de crema de varios gustos, y te sobra $${dinero - 60}`);
}
else if (dinero >= 90 && dinero <= 100) {
  alert(`${nombre} comprate un "helaDote" de crema de varios gustos con cobertura, y te sobra $${dinero - 90}`);
}
else {
  alert(`${nombre} eres el peor, sentate y mirá como toman helado otras/os, no te alcanza ni para el cucurucho`);
}

//edad
let año = parseInt(prompt(`${nombre} dime ¿en qué año naciste (aaaa)?`));
let cumpleaños = prompt(`Tu cumpleaños ${nombre} ya pasó (si/no)`);
let edad1 = 2022 - año;
let edad2 = 2022 - año;
if (cumpleaños == `si`) {
  alert (`Tú tienes ${edad1} años`);
}
else if (cumpleaños == `no`) {
  alert (`Tú tienes ${--edad2} años`);
}
else{
  `Segui participando`
}