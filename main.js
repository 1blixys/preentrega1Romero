alert( `
Hola!! \n
Bienvenido a Limon Bar!

Ingresa los datos y Contesta las siguientes preguntas para poder Elegir y Comprar tu Producto.`);

const nombre = prompt( ' Por Favor ingrese su Nombre Completo:' );

let numeroDeTelefono = '';
let email = '';
let contraseña = '';


if ( nombre != "" ) 
{
  alert( ` Muy bien ${ nombre }.`);

}
else
{
  alert( "El Nombre se Requiere" );
  nombre = prompt( 'Introducir su Nombre:' );
}

// // //  Aca se ingresa la edad 

let edad = parseInt( prompt( "Ingrese su Edad, Debe ser Mayor a 18 Años" ) );
if ( edad === '' )  // Aca se verifica si se ingresa un string vacio o no
{
  alert( "Debe Ingresar  edad" );
  edad = parseInt( prompt( "Ingrese su Edad" ) );
}

while ( edad < 18 ) // Aca se verifica si la edad es mayor a 18 años
{
  alert( "Edad no Permitida" );
  edad = parseInt( prompt( "Ingrese su Edad" ) );

}


function setPais () {

  let pais = prompt( `
  Ingrese su País de Nacimiento 
    - Argentina
    - Chile
    - Colombia
    - Venezuela
    - Peru
    - Brasil
  `).toLocaleLowerCase();//se le pide al usuario el valor del pais

  switch ( pais )
  {
    case "argentina":
      alert( "su país de nacimiento es Argentina." );
      break;

    case "chile":
      alert( "su país de nacimiento es Chile." );
      break;

    case "colombia":
      alert( "su país de nacimiento es Colombia." );
      break;

    case "venezuela":
      alert( "su país de nacimiento es Venezuela." );
      break;

    case "peru":
      alert( "su país de nacimiento es Peru." );
      break;

    case "brasil":
      alert( "su país de nacimiento es Brasil." );
      break;

    default:
      return '';
     
  };
  return pais;
}

let pais;
do {
  pais = setPais();
  if(pais == '')
    alert(" Por favor Ingrese un Pais")

} while(pais == '')



alert( ` Muy bien!
        Ahora Te pediremos Que Ingreses tus Datos: `); 


function crearPerfil (){
  numeroDeTelefono = prompt( 'Ingresa tu numero de Telefono:' );
  email = prompt( 'Ingresa tu email:' ).toLowerCase();
  contraseña = prompt( 'Ingresa tu Contraseña:' ).toLowerCase();
    
  alert( `
  Perfecto, tu perfil fue creado exitosamente como: 
  Nombre: ${ nombre }
  Edad: ${ edad }
  Nacionalidad: ${ pais }
  Numero de Telefono: ${ numeroDeTelefono }
  Email: ${ email }
  Contraseña: ${ contraseña } `);

};

crearPerfil()

function setComida() {
  let precioComida = 0;
  let comida = prompt(`Excelente!
  Ahora le pediremos que elija un producto:
  1. Pollo con Papas ($2500)
  2. Asado ($3500)
  3. Menu del Dia ($1500)`);

  switch (comida)
  {
    case "1":
      alert( "La comida que eligio fue Pollo con Papas");
      precioComida = 2500;
      break;

    case "2":
      alert( "La comida que eligio fue Asado");
      precioComida = 3500;
      break;
    
    case "3":
      alert( "La comida que eligio fue Menu del Dia");
      precioComida = 1500;
      break;
    
    default:
      break;

  };
  return precioComida;
}

let precioComida;
do {
  precioComida = setComida();
  if(precioComida == 0)
    alert(" Por favor elija la Comida")

} while(precioComida == 0)

alert(`Precio total con iva: ${precioComida*(1+21/100)}`) 

alert("Gracias por elegirnos, los esperamos en otra ocación! ");























