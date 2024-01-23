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

document.getElementById("contactar").addEventListener("click", function(event){
event.preventDefault();
const emailValue = document.getElementById("email").value;
if(emailValue){
    alert("Gracias " + emailValue + "me pondré en contacto contigo pronto!")
}
})
