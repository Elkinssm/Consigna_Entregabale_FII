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
  if (
    !validarDatosPersona({
      nombre: "nombre",
      valor: datosPersona.nombre,
    })
  ) {
    alert("Datos no validos");
    datosPersona.nombre = "";
    return;
  }
  datosPersona.edad = prompt("Ingresa el año en que naciste");
  if (
    !validarDatosPersona({
      nombre: "edad",
      valor: datosPersona.edad,
    })
  ) {
    alert("Datos no validos");
    datosPersona.edad = "";
    return;
  } else {
    datosPersona.edad = 2022 - datosPersona.edad;
  }
  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
  if (
    !validarDatosPersona({
      nombre: "ciudad",
      valor: datosPersona.ciudad,
    })
  ) {
    alert("Datos no validos");
    datosPersona.ciudad = "";
    return;
  }
  datosPersona.interesPorJs = confirm("Te interesa Javascript") ? "Si" : "No";
}

function validarDatosPersona(dato) {
  if (dato.nombre === "nombre" || dato.nombre === "ciudad") {
    const re = /^(([A-Za-zÀ-ÿ])+[ ]?)*$/g;
    return re.test(String(dato.valor).toLowerCase());
  }
  if (dato.nombre === "edad") {
    if (isNaN(dato.valor)) {
      return false;
    }
    return true;
  }
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
alternarColorTema();

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener("keypress", logKey);

function logKey(e) {
  if (e.code === "KeyF") {
    document.getElementById("sobre-mi").classList.remove("oculto");
  }
}
