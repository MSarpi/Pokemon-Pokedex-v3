document.addEventListener("DOMContentLoaded", function() {
    const cloud = document.getElementById("cloud");
    const barraLateral = document.querySelector(".barra-lateral");
    const spans = document.querySelectorAll("span");
    const palanca = document.querySelector(".switch");
    const circulo = document.querySelector(".circulo");
    const menu = document.querySelector(".menu");
    const main = document.querySelector("main");
  
    // Verifica el tamaño de la ventana al cargar la página
    if (window.innerWidth <= 320) {
      barraLateral.classList.add("mini-barra-lateral");
      main.classList.add("min-main");
      spans.forEach((span) => {
        span.classList.add("oculto");
      });
    }
  
    menu.addEventListener("click", () => {
      barraLateral.classList.toggle("max-barra-lateral");
      if (barraLateral.classList.contains("max-barra-lateral")) {
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
      } else {
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
      }
      if (window.innerWidth <= 320) {
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span) => {
          span.classList.add("oculto");
        });
      }
    });
  
    palanca.addEventListener("click", () => {
      let body = document.body;
      body.classList.toggle("dark-mode");
      circulo.classList.toggle("prendido");
  
      // Guarda el estado del modo oscuro en el almacenamiento local
      const modoOscuro = body.classList.contains("dark-mode");
      localStorage.setItem("modoOscuro", modoOscuro);
    });
  
    cloud.addEventListener("click", () => {
      barraLateral.classList.toggle("mini-barra-lateral");
      main.classList.toggle("min-main");
      spans.forEach((span) => {
        span.classList.toggle("oculto");
      });
    });
  
    // Verifica el tamaño de la ventana cuando cambia
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 320) {
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span) => {
          span.classList.add("oculto");
        });
      } else {
        barraLateral.classList.remove("mini-barra-lateral");
        main.classList.remove("min-main");
        spans.forEach((span) => {
          span.classList.remove("oculto");
        });
      }
    });
  
    // Verifica si hay un modo oscuro guardado en el almacenamiento local
    const modoOscuroGuardado = localStorage.getItem("modoOscuro");
    if (modoOscuroGuardado === "true") {
      document.body.classList.add("dark-mode");
      circulo.classList.add("prendido");
    }
  });
  