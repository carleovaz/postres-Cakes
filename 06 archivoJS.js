
//USO DE VARIABLE GLOBAL
var global = "Accediste a la página de etiquetas.";


function variableglobal() 
{
  alert(global);
}

//USO DE CINCO EVENTOS
function evento1(msg)
{
    alert(msg);
}

function evento2(msg)
{
    alert(msg);
}

function evento3()
{
    alert("Has introducido tu DNI ¿Estas seguro que es el correcto?")
}

function evento4(msg)
{
    alert(msg);
}

function evento5(msg)
{
    alert(msg);
}

//USO DE RANDOM, ARRAY, CONDICIONALES Y STRINGS

function random()
{
    //Creamos el array de nombres aleatorios
    var array = ['Zeus', 'Poseidon', 'Hades', 'Thor', 'Odin','Loki', 'Ra', 'Isis', 'Set', 'Quetzalcoatl']; 
    //Recorremos el array y con la variable random, seleccionamos un nombre al azar
    var random = array[(Math.random() * array.length) | 0]
    alert (random);
    //Dependiendo del nombre que salga elegido, colocaremos una condición
    if(random=='Zeus')
    {
        alert('Es el señor del Olimpo.');
        console.log('Zeus es el menor de los tres hermanos.');
    }

    else if(random=='Odin')
    {
        alert('Es el Padre de Todos.');
        console.log('Loki no es su hijo.');
    }

    else if(random=='Ra')
    {
        alert('Es el dios del sol.');
        console.log('Set es su mayor enemigo.');
    }

    else if(random=='Quetzalcoatl')
    {
        alert('Quetzalcoatl es el dios de la luz azteca.');
        console.log('Kukulkan es su representación en el panteón maya.');
    }

    while(random=='Poseidon' | random=='Hades')
    {
        alert("Poseidon y Hades fueron devorados por su padre Cronos.");
        break;
    }
    //USO DE DOS FUNCIONES DE CADENAS, toUpperCase y substring
    while (random=='Isis')
    {
        var string1 = new String('La diosa Isis es la esposa de Osiris.');
        alert(string1.toUpperCase());
        break;
    }

    while (random=='Loki')
    {
        var string2 = new String('Loki sera quien traiga el fin del mundo, desatando el Ragnarok.');
        alert(string2.substring(1,3))
        break;
    }

}

//USO DE FECHA
function fecha1()
{
    //DECLARAMOS LA FECHA Y SELECCIONAMOS LOS DATOS CON EL GET
    var fecha = new Date('Junio 12 2021');
    var dia = fecha.getDay();
    var mes = fecha.getMonth();
    var año = fecha.getFullYear();
    alert('Estamos en el año: ' + año + ' Del mes: ' +  mes + ' Y el día '+  dia);
}

function fecha2()
{
    //DECLARAMOS LA VARIABLE FECHA Y SELECCIONAMOS LOS DATOS CON EL GET
    var fecha = new Date();
    var horas = fecha.getHours();
    var milisegundos = fecha.getMilliseconds();
    var minutos = fecha.getMinutes();
    alert('la horas es: ' + horas + ' los milisegundos son: ' +  milisegundos + ' Y los minutos '+  minutos);
}


