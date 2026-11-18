/* ============================================================
   marca.js — RONALD PRIV · app privada
   ------------------------------------------------------------
   ESTE ES EL ARCHIVO QUE SE EDITA AL REPLICAR LA CAMPAÑA.
   Todo lo que cambia de un candidato a otro vive aquí; el resto
   del código no se toca.

   Se carga ANTES que storage-ns.js y que la app (y el service
   worker lo trae con importScripts), así que no puede depender
   de nada: solo datos.
   ============================================================ */
(function (raiz) {
  'use strict';

  raiz.MARCA = {

    /* Prefijo de almacenamiento de ESTA campaña. Las apps de todas
       las campañas viven en el mismo origen (botheart911.github.io)
       y comparten localStorage y caché: sin un prefijo propio se
       pisan sesiones, PIN, token de notificaciones y caché.
       Corto, en minúsculas y único por campaña. Ej.: 'adri'. */
    STORAGE_NS: 'rs',

    /* ---- Respaldo de marca ----------------------------------------
       El valor REAL vive en la hoja CONFIG del CORE y llega por el
       endpoint app.marca (marca-vivo.js). Esto es solo el respaldo
       para el primer arranque, sin red o con el CORE caído.
       Al replicar: poner aquí los datos de la campaña nueva. */
    CANDIDATO:    'Ronald Suarez',
    PN_CANDIDATO: 'Ronald',
    MUNICIPIO:    'Honda',
    DEPARTAMENTO: 'Tolima',
    LEMA:         'Honda Piensa en Grande',
    EQUIPO:       'Soy Ronalista',
    COLOR:        '#007BFF',
    COLOR_700:    '#0056B3',

    /* ---- Firebase -------------------------------------------------
       NO es marca: es infraestructura. Cada campaña necesita su PROPIO
       proyecto (si no, el "en vivo" y los push de dos campañas caen en
       el mismo sitio). Al replicar hay que crear el proyecto nuevo y
       pegar aquí su configuración. */
    FIREBASE: {
      apiKey: "AIzaSyAa0qmJXDTMxrBYybLZS66akyYYzOcuVpE",
      authDomain: "project-61fbbccc-d656-4de1-b77.firebaseapp.com",
      databaseURL: "https://project-61fbbccc-d656-4de1-b77-default-rtdb.firebaseio.com",
      projectId: "project-61fbbccc-d656-4de1-b77",
      storageBucket: "project-61fbbccc-d656-4de1-b77.firebasestorage.app",
      messagingSenderId: "1026629550775",
      appId: "1:1026629550775:web:1188049013c1a8c1f24332"
    },


    /* URL del Web App del backend (RONALD CORE, /exec). La MISMA
       para todas las apps de una campaña. */
    API_URL: 'https://script.google.com/macros/s/AKfycbyhmOyfCURFpxDMo-mN0FHYril7vxPDUjV410rzfwzvdfTFgGkdlaL88-1TayV5B0m7cQ/exec',

    /* Carpeta web donde viven las imagenes COMPARTIDAS de la campana
       (logo, banner, foto por defecto). Termina en /.
       Sirve para que las llaves de imagen puedan guardar solo el nombre
       del archivo; el dia que cambie el hosting se cambia ESTO y no cada
       URL, una por una. Un valor que ya sea una URL completa pasa intacto,
       asi que ponerla aqui no cambia nada por si sola.
       El valor REAL puede llegar en caliente del CORE (MARCA_IMG_BASE);
       esto es el respaldo. Resolver: MV.img('logo.png'). */
    IMG_BASE: 'https://botheart911.github.io/IMAGENES-RONALD/',

    /* Ícono cuadrado (logo) y banner horizontal. Los usa la app en
       login, credencial, marca de agua y pie de página.
       OJO: el ícono TAMBIÉN está escrito a mano en index.html
       (favicon, apple-touch-icon y splash) y en manifest.json —
       eso hay que cambiarlo aparte, ver el checklist. */
    APP_ICON:   'https://botheart911.github.io/IMAGENES-RONALD/marca/logo.png',
    APP_BANNER: 'https://botheart911.github.io/IMAGENES-RONALD/marca/banner.png',

    /* 07/11/2026 · Web pública de inscripciones (repo RONALD-INSCRIPCION).
       El botón Enviar de Formularios arma el enlace <esto>#<formulario>.
       Al replicar: la dirección de Pages del repo de la campaña nueva. */
    INSCRIPCIONES_URL: 'https://botheart911.github.io/RONALD-INSCRIPCION/'
    /* 12/11/2026 · POSTCONSULTA_URL se quitó: la validación de registros vive
       en SUAREZ → Mis referidos y el repo RONALD-POSTCONSULTA se retiró. */
  };

})(typeof self !== 'undefined' ? self : this);
