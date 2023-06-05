

const userButton = document.getElementById('user-button');
const userMenu = document.getElementById('user-menu');

userButton.addEventListener('click', async (event) => {
  await userMenu.componentOnReady();
  await userMenu.present();
});

function toggleFAQ(index) {
  const answer = document.getElementById(`faq-answer-${index}`);
  answer.classList.toggle('show');
}





function redireccion1() {
  window.location.href = "Crea_tu_perfil.html";
}
function redireccion2() {
  window.location.href = "Solicitudes_de_opciones.html";
}
function redireccion3() {
  window.location.href = "Gestionar_informaciones.html";
}
function redireccion4() {
  window.location.href = "Preguntas_frecuentes_para_modelos.html";
}
function redireccion5() {
  window.location.href = "sobre_nosotro.html";
}