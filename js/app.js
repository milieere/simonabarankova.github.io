const sectionsPage = new fullpage('#fullpage', {
    autoScrolling: true, // Se activa el scroll.
	fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
	fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
	easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
	scrollingSpeed: 700, // Velocidad del scroll. Valores: en milisegundos.
	css3: true, // Si usara CSS3 o javascript.
	easingcss3: 'ease-out', // Curva de velocidad del efecto.
    loopBottom: true, // Regresa a la primera seccion siempre y cuando se ya haya llegado a la ultima sección y el ususario siga scrolleando.
    
    /////:::::: Barra de navegación
	//// ──────────────────────────────────────────────────
	navigation: true, // Muesta la barra de navegación.
	menu: '#menu', // Menu de navegación.
    anchors: ['home', 'first', 'experience1', 'experience2', "experience3", "contact"], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
	navigationTooltips: ['home', 'first', 'experience1', 'experience2', "experience3", "contact"], // Tooltips que mostrara por cada boton.
    showActiveTooltip: false, // Mostrar tooltip activa.
    
    	//   :::::: Secciones
	// ──────────────────────────────────────────────────
    verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.
    
});

function openNav() {
	const x = document.querySelector("nav");
	if (x.className === "nav") {
		x.className += " responsive";
	} else {
		x.className = "nav";
	}
}

const button = document.getElementById('myButton');
const div = document.getElementById('menu');
const icon = document.querySelector('.icon');
const x = document.querySelector("nav");
const menu = document.querySelector(".menucontainer");
console.log(icon);

document.addEventListener('click', myFunction)

function myFunction(e) {
	console.log(e.target);

	if((x.className === "nav") && (e.target === icon || e.target === itag)) {
		x.className += " responsive";
		menu.className += " responsive";
	} else if((x.className === "nav responsive") && (e.target === icon || e.target === menu)) {
		x.className = "nav";
		menu.className = "menucontainer";
	} else {
		x.className = "nav";
		menu.className = "menucontainer";
	}
}