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
    anchors: ['home', 'story', 'portfolio', 'contact'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
	navigationTooltips: ['Home', 'My Story', 'Portfolio', 'Contact Me'], // Tooltips que mostrara por cada boton.
    showActiveTooltip: false, // Mostrar tooltip activa.
    
    	//   :::::: Secciones
	// ──────────────────────────────────────────────────
    verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.
    
});

function openNav() {
	const x = document.getElementById("menu");
	if (x.className === "menu") {
		x.className += " responsive";
	} else {
		x.className = "menu";
	}
}

function closeNavClick() {
	const x = document.getElementById("menu");
	if (x.className === "menu") {
		x.className += " responsive";
	} else if (x.className === "menu responsive") {
		x.onclick = openNav();
	} else {
		x.className = "menu";
	}
}

function addOnclick() {
	const links = document.getElementById('menu').querySelectorAll('a');
	for (let i = 0; i < 4; i++) {
		let link = links[i]
		link.onclick = openNav();
	}
}
