class edades {
    constructor(edad1,edad2){
        this.edad1 = edad1;
        this.edad2 =  edad2;
    }
    
}

document.getElementById("nombre1").value = "Pedro";
document.getElementById("edad1").value   = 39;
document.getElementById("nombre2").value = "Maria";
document.getElementById("edad2").value   = 35;

edades.edad1 = Number(document.getElementById("edad1").value);
edades.edad2 = Number(document.getElementById("edad2").value);
let promedio = ((edades.edad1+edades.edad2)/2);

let texto = document.getElementById("division2");
texto.innerHTML = `<h4>El resultado del promedio es: ${promedio}</h4>`


