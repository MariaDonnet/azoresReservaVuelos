alert("BIENVENIDOS A AZORES, EL SISTEMA DE RESERVAS DE TUS VIAJES")

//Ingreso al sistema
let nombreIngresado = " ";
nombreIngresado = prompt("Ingresar Nombre")
if(nombreIngresado == ""){
    alert("INGRESE SU NOMBRE")
}else{
    alert("NOMBRE:"+" "+nombreIngresado)
}

let apellidoIngresado = "";
apellidoIngresado = prompt("Ingresar apellido")
if(apellidoIngresado == ""){
    alert("INGRESE SU APELLIDO")
}
else{
    alert("APELLIDO INGRESADO:"+" "+apellidoIngresado)
}

if((nombreIngresado !="") && (apellidoIngresado !=""  )){
    alert("Gracias por ingresar su Nombre y Apellido");
}
else{
    alert("error: Ingresar nombre y apellido para poder utilizar nuestro sistema de reserva de viajes");
}


//VARIABLES
let menuPrincipal;
let precioViaje;
let escMenu = false;

do {
    menuPrincipal = parseInt(
        prompt(
            `Por favor elija una opcion:
            1_Vuelo 1: Origen A, destino V
            2_Vuelo 2: Origen B, destino W
            3_Vuelo 3: Origen C, destino X
            4_Vuelo 4: Origen D, destino Y
            5_Vuelo 5:  Salir del menu`
    )
);

function reserva() {}
switch (menuPrincipal) {
    case 1:
        alert("El precio del vuelo 1 es $200000");break;
    case 2:
        alert("El precio del vuelo 2 es $315000");break;
    case 3:
        alert("El precio del vuelo 3 es $117000");break;
    case 4:
        alert("El precio del vuelo 4 es $575000");break;
    case 4:
        alert("El precio del vuelo 5 es $425300");break;
    case 5:
        alert("Gracias por elegirnos!!!"); escMenu = true; break;

default:
alert("Por favor escoja una opcion para continuar");break;
}
}while (!escMenu);

