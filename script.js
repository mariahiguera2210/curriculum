document.getElementById("addSkill").addEventListener("click", function () {
  let newSkill = prompt("Introduce una nueva habilidad:");
  let level = prompt("Ingrese nivel de la habilidad ");
  if (newSkill) {
    let table = document.querySelector("table");
    let habilidad = document.createElement("td");
    let nivel = document.createElement("td");
    habilidad.textContent = newSkill;
    nivel.textContent = level;
    table.appendChild(habilidad);
    table.appendChild(nivel);
  }
});

document
  .getElementById("contactar")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const emailValue = document.getElementById("email").value;
    if (emailValue) {
      alert("Gracias " + emailValue + " me pondré en contacto contigo pronto!");
    } else {
      alert("Ingresa email porfavor ");
    }
  });

const certificaciones = [
  "AWS Certified Cloud Practitioner",
  "EF SET English Certificate C1/Adavance",
  "Curso básico de JavaScript",
];

function mostrarCertificaciones() {
  let ul = document.getElementById("listaCertificaciones");

  for (let i = 0; i < certificaciones.length; i++) {
    let li = document.createElement("li");
    li.textContent = certificaciones[i];
    ul.appendChild(li);
  }
 
} window.onload = mostrarCertificaciones;

const listaProyectos = [
  "Tienda de Barrio", 
  " Sistema de citas medicas",
  " Hoja de vida"
]

document.getElementById("verProyectos").addEventListener("click",function(){
 
  let numero =  parseInt(prompt("Del 1 al 3 cuántos proyectos deseas ver ingresa el número"))
  let show;
  for(let i = 0; i< listaProyectos.length; i++){
    if(numero == 1){
      show = alert(listaProyectos[0])
    } else if(numero == 2){
      show = alert(listaProyectos.slice(0,2))
    }else if(numero == 3){
      show = alert(listaProyectos)
    }else if(numero > 3 || numero <= 0){
      show = alert("Ingresa un numero entre 1 y 3")
    }
    return show;

  }
})
