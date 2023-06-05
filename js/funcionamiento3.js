

const userButton = document.getElementById('user-button');
const userMenu = document.getElementById('user-menu');

userButton.addEventListener('click', async (event) => {
  await userMenu.componentOnReady();
  await userMenu.present();
});



const profileImage = document.getElementById('profile-image');
const previousImageIcon = document.getElementById('previous-image-icon');
const nextImageIcon = document.getElementById('next-image-icon');

const images = [
  './imagenes/nequi.jpg',
  './imagenes/dinero.jpg',
  './imagenes/daviplata.jpeg'
];

let currentImageIndex = 0;

previousImageIcon.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  profileImage.src = images[currentImageIndex];
});

nextImageIcon.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  profileImage.src = images[currentImageIndex];
});






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