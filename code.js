/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingresa tu nombre");
  datosPersona.edad = 2022 - prompt("Ingresa el año en que naciste");
  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
  datosPersona.interesPorJs = confirm("Te interesa Javascript") ? "Si" : "No";
}
//console.log(datosPersona);

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById("nombre").innerHTML = datosPersona.nombre;
  document.getElementById("edad").innerHTML = datosPersona.edad;
  document.getElementById("ciudad").innerHTML = datosPersona.ciudad;
  document.getElementById("javascript").innerHTML = datosPersona.interesPorJs;
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  document.getElementById(fila);
  fila.innerHTML = "";
  listado.forEach((element) => {
    const template = `
       <div class="caja">
                    <img src="${element.imgUrl}" alt="${element.lenguajes}"/>
                    <p class="lenguajes">Lenguajes: ${element.lenguajes}<p>
                    <p class="bimestre">Bimestre: ${element.bimestre}<p>
                </div>
    `;
    fila.innerHTML += template;
  });
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  document.getElementById("cambiar-tema").onclick = () => {
    document.getElementById("sitio").classList.toggle("dark");
  };
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
// Finalmente, agregar un listener en nuestra página que nos permita captar el evento
// de teclado cuando presionamos la tecla F.
// 1. Captar cuando se presiona una tecla.
// 2. Si la tecla presionada es la F, al texto del párrafo ‘sobre-mi’ se le deberá
// eliminar la clase que lo mantiene oculto,
// ➔ Tips
// ◆ En este caso la tecla no debe alternar la visibilidad, solamente desocultar
// por única vez.
// 5

// document.getElementById("card").addEventListener("keypress", (logKey) => {
//   if (keypress === "keyF") {
//     document.getElementById("sobre-mi").classList.remove("sobre-mi");
//   }
//   console.log(keypress);
// });

//const log = document.getElementById("card");

//document.addEventListener("keypress", logKey);
// const classTest = document.querySelector("p");
// classTest.classList.remove("oculto");

// function logKey(e) {
//   //log.textContent += ` ${e.code}`;
//   debugger;
//   if (e.code === "KeyF") {
//     const classTest = document.querySelector("oculto");
//     classTest.classList.remove("oculto");
//   }

//   console.log(e.code);
// }

/////////////////////////////
// const log = document.getElementById("card");

document.addEventListener("keypress", logKey);

function logKey(e) {
  //log.textContent += ` ${e.code}`;
  if (e.code === "KeyF") {
    document.querySelector("p").classList.remove("oculto");
  }

  console.log(e.code);
}
