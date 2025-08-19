function agregar(valor){
    document.getElementById("pantalla").value =  document.getElementById("pantalla").value + valor;
}
function borrar(){
    document.getElementById("pantalla").value= ""
}

function calcular(){
    const datos=document.getElementById("pantalla").value;
    const resultado = eval(datos);
    document.getElementById("pantalla").value=resultado;
}