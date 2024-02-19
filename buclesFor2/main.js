// 2- Imprime los números pares entre dos números que introduzca el usuario

alert('Introduce dos valores y te enseñaré los números pares que se encuentran entre ellos');

let numMenor = parseInt(prompt('Introduce el número menor (desde):'));
let numMayor = parseInt(prompt('Introduce el número mayor (hasta):'));

document.write('<h1>Estos son los números pares entre '+numMenor+' y '+numMayor+':</h1>');


if ((numMenor < numMayor)&&(Number.isInteger(numMenor)==true&&Number.isInteger(numMayor)==true)) {

    for(let i=numMenor; i<=numMayor; i++){
        console.log(i);
        if (i%2==0){
            document.write(i+'<br>');
        }

    }

}

else if ((numMayor < numMenor)&&(Number.isInteger(numMenor)==true&&Number.isInteger(numMayor)==true)) {
    alert('No me has hecho caso. El número menor es mayor que el anterior. Voy a darles la vuelta para poder hacerlo igualmente.');

    for(let i = numMayor; i<=numMenor; i++){
        console.log(i);
        if (i%2==0){
            document.write(i+'<br>');
        }

    }
}

else{

    document.write('Introduce valores numéricos, parece que hay algún error.');
    
}