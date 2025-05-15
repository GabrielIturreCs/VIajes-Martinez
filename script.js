// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    document.querySelector('.navbar-toggler').click();
                }
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Form submission
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const destino = document.getElementById('destino').value;
            const fecha = document.getElementById('fecha').value;
            const personas = document.getElementById('personas').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Create WhatsApp message
            let whatsappMessage = `Hola Víctor, quiero reservar un viaje a ${destino}.\n`;
            whatsappMessage += `Nombre: ${nombre}\n`;
            whatsappMessage += `Email: ${email}\n`;
            whatsappMessage += `Fecha: ${fecha}\n`;
            whatsappMessage += `Personas: ${personas}\n`;
            
            if (mensaje) {
                whatsappMessage += `Mensaje: ${mensaje}\n`;
            }
            
            // Encode message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Redirect to WhatsApp
            window.open(`https://wa.me/5493885123456?text=${encodedMessage}`, '_blank');
        });
    }
    
    // Language switcher
    setupLanguageSwitcher();
});

// Language translations
const translations = {
    'es': {
        // Navbar
        'nav-inicio': 'Inicio',
        'nav-destinos': 'Destinos',
        'nav-como': 'Cómo Funciona',
        'nav-galeria': 'Galería',
        'nav-contacto': 'Contacto',
        
        // Hero
        'hero-title': 'Explorá Jujuy con Víctor Martínez',
        'hero-subtitle': 'Traslados seguros, cómodos y puntuales a destinos increíbles',
        'hero-btn': 'Reservar por WhatsApp',
        
        // Destinos
        'destinos-title': 'Destinos Turísticos',
        'destinos-subtitle': 'Conocé los lugares más impresionantes de Jujuy',
        'destino1-title': 'Salinas Grandes',
        'destino1-text': 'Un inmenso desierto de sal que parece no tener fin. Una experiencia visual única con el cielo azul reflejándose en el blanco resplandeciente.',
        'destino2-title': 'Cerro de los 7 Colores',
        'destino2-text': 'El emblemático cerro de Purmamarca, con sus capas de diferentes tonalidades que representan distintas eras geológicas.',
        'destino3-title': 'Lagunas De Yala',
        'destino3-text': 'Conocido como lagunas de yalas donde hay varias. Lagunas y un  clima excepcional para visitar en familia',
        'destino4-title': 'Tilcara',
        'destino4-text': 'Hogar del famoso Pucará, un antiguo asentamiento indígena fortificado. Un pueblo con rica historia y tradiciones culturales vivas.',
        'destino5-title': 'Humahuaca',
        'destino5-text': 'Ciudad histórica con su famoso Monumento a los Héroes de la Independencia y el pintoresco cabildo con su reloj cucú.',
        'destino6-title': 'Iruya',
        'destino6-text': 'Pueblo enclavado en las montañas con calles empedradas y vistas panorámicas impresionantes. Un viaje especial para los amantes de la fotografía.',
        'destino-btn': 'Reservar este viaje',
        
        // Cómo Funciona
        'como-title': 'Cómo Funciona',
        'como-subtitle': 'Reservar tu viaje es muy sencillo',
        'paso1-title': 'Elegí tu destino',
        'paso1-text': 'Seleccioná el lugar que querés visitar de nuestra lista de destinos turísticos.',
        'paso2-title': 'Coordiná por WhatsApp',
        'paso2-text': 'Contactanos por WhatsApp para confirmar disponibilidad y coordinar detalles.',
        'paso3-title': 'Te buscamos',
        'paso3-text': 'Víctor te busca puntualmente en el lugar y horario acordado.',
        'paso4-title': 'Disfrutá el viaje',
        'paso4-text': 'Relajate y disfrutá de los increíbles paisajes de Jujuy, ida y vuelta.',
        
        // Galería
        'galeria-title': 'Galería',
        'galeria-subtitle': 'Imágenes de nuestros viajes y destinos',
        'galeria-img1': 'Salinas Grandes',
        'galeria-img2': 'Cerro de los 7 Colores',
        'galeria-img3': 'Mirador del Hornocal',
        'galeria-img4': 'Nuestro vehículo',
        
        // Testimonios
        'testimonios-title': 'Testimonios',
        'testimonios-subtitle': 'Lo que dicen nuestros clientes',
        'testimonio1-text': '"¡Hermoso viaje a Purmamarca con Víctor! Súper puntual y amable. Nos explicó todo sobre la zona."',
        'testimonio1-autor': 'Ana (Argentina)',
        'testimonio2-text': '"Increíble experiencia en las Salinas Grandes. Víctor es un excelente guía y conductor. Muy recomendable."',
        'testimonio2-autor': 'John (Estados Unidos)',
        'testimonio3-text': '"Viajamos al Hornocal con Víctor y fue una experiencia inolvidable. Muy profesional y conocedor de la zona."',
        'testimonio3-autor': 'María y Pedro (España)',
        
        // Contacto
        'contacto-title': 'Contacto',
        'contacto-subtitle': 'Reservá tu viaje ahora',
        'contacto-info-title': 'Información de contacto',
        'contacto-nombre': 'Víctor Martínez',
        'contacto-whatsapp': 'WhatsApp: +54 9 388 5123456',
        'contacto-ubicacion': 'Ubicación',
        'contacto-mapa-texto': 'Servicio disponible en toda la provincia de Jujuy',
        'contacto-form-title': 'Formulario de reserva',
        'form-nombre': 'Nombre',
        'form-email': 'Email',
        'form-destino': 'Destino deseado',
        'form-destino-select': 'Selecciona un destino',
        'form-fecha': 'Fecha del viaje',
        'form-personas': 'Cantidad de personas',
        'form-mensaje': 'Mensaje adicional',
        'form-submit': 'Enviar Reserva',
        
        // Footer
        'footer-title': 'Viajes con Víctor',
        'footer-text': 'Traslados turísticos en Jujuy, Argentina. Servicio personalizado, seguro y confiable.',
        'footer-links': 'Enlaces rápidos',
        'footer-inicio': 'Inicio',
        'footer-destinos': 'Destinos',
        'footer-como': 'Cómo Funciona',
        'footer-galeria': 'Galería',
        'footer-contacto': 'Contacto',
        'footer-copyright': '© 2025 Todos los derechos reservados',
        'footer-developer': 'Desarrollado por Gabriel Iturre'
    },
    'en': {
        // Navbar
        'nav-inicio': 'Home',
        'nav-destinos': 'Destinations',
        'nav-como': 'How It Works',
        'nav-galeria': 'Gallery',
        'nav-contacto': 'Contact',
        
        // Hero
        'hero-title': 'Explore Jujuy with Víctor Martínez',
        'hero-subtitle': 'Safe, comfortable and punctual transfers to incredible destinations',
        'hero-btn': 'Book via WhatsApp',
        
        // Destinos
        'destinos-title': 'Tourist Destinations',
        'destinos-subtitle': 'Discover the most impressive places in Jujuy',
        'destino1-title': 'Salinas Grandes',
        'destino1-text': 'An immense salt desert that seems endless. A unique visual experience with the blue sky reflecting on the shining white surface.',
        'destino2-title': 'Hill of 7 Colors',
        'destino2-text': 'The emblematic hill of Purmamarca, with its layers of different shades representing different geological eras.',
        'destino3-title': 'Hornocal Viewpoint',
        'destino3-text': 'Known as the "Hill of 14 Colors", it offers a natural spectacle of multicolored mountains that look like a petrified rainbow.',
        'destino4-title': 'Tilcara',
        'destino4-text': 'Home to the famous Pucará, an ancient fortified indigenous settlement. A town with rich history and living cultural traditions.',
        'destino5-title': 'Humahuaca',
        'destino5-text': 'Historic city with its famous Monument to the Heroes of Independence and the picturesque town hall with its cuckoo clock.',
        'destino6-title': 'Iruya',
        'destino6-text': 'Village nestled in the mountains with cobbled streets and impressive panoramic views. A special trip for photography lovers.',
        'destino-btn': 'Book this trip',
        
        // Cómo Funciona
        'como-title': 'How It Works',
        'como-subtitle': 'Booking your trip is very simple',
        'paso1-title': 'Choose your destination',
        'paso1-text': 'Select the place you want to visit from our list of tourist destinations.',
        'paso2-title': 'Coordinate via WhatsApp',
        'paso2-text': 'Contact us via WhatsApp to confirm availability and coordinate details.',
        'paso3-title': 'We pick you up',
        'paso3-text': 'Víctor picks you up punctually at the agreed place and time.',
        'paso4-title': 'Enjoy the trip',
        'paso4-text': 'Relax and enjoy the incredible landscapes of Jujuy, round trip.',
        
        // Galería
        'galeria-title': 'Gallery',
        'galeria-subtitle': 'Images of our trips and destinations',
        'galeria-img1': 'Salinas Grandes',
        'galeria-img2': 'Hill of 7 Colors',
        'galeria-img3': 'Hornocal Viewpoint',
        'galeria-img4': 'Our vehicle',
        
        // Testimonios
        'testimonios-title': 'Testimonials',
        'testimonios-subtitle': 'What our clients say',
        'testimonio1-text': '"Beautiful trip to Purmamarca with Víctor! Super punctual and friendly. He explained everything about the area."',
        'testimonio1-autor': 'Ana (Argentina)',
        'testimonio2-text': '"Amazing experience at Salinas Grandes. Víctor is an excellent guide and driver. Highly recommended."',
        'testimonio2-autor': 'John (United States)',
        'testimonio3-text': '"We traveled to Hornocal with Víctor and it was an unforgettable experience. Very professional and knowledgeable about the area."',
        'testimonio3-autor': 'María and Pedro (Spain)',
        
        // Contacto
        'contacto-title': 'Contact',
        'contacto-subtitle': 'Book your trip now',
        'contacto-info-title': 'Contact information',
        'contacto-nombre': 'Víctor Martínez',
        'contacto-whatsapp': 'WhatsApp: +54 9 388 5123456',
        'contacto-ubicacion': 'Location',
        'contacto-mapa-texto': 'Service available throughout the province of Jujuy',
        'contacto-form-title': 'Booking form',
        'form-nombre': 'Name',
        'form-email': 'Email',
        'form-destino': 'Desired destination',
        'form-destino-select': 'Select a destination',
        'form-fecha': 'Trip date',
        'form-personas': 'Number of people',
        'form-mensaje': 'Additional message',
        'form-submit': 'Send Booking',
        
        // Footer
        'footer-title': 'Travels with Víctor',
        'footer-text': 'Tourist transfers in Jujuy, Argentina. Personalized, safe and reliable service.',
        'footer-links': 'Quick links',
        'footer-inicio': 'Home',
        'footer-destinos': 'Destinations',
        'footer-como': 'How It Works',
        'footer-galeria': 'Gallery',
        'footer-contacto': 'Contact',
        'footer-copyright': '© 2025 All rights reserved',
        'footer-developer': 'Developed by Gabriel Iturre'
    }
};

// Setup language switcher
function setupLanguageSwitcher() {
    // Set default language
    let currentLang = localStorage.getItem('preferredLanguage') || 'es';
    changeLanguage(currentLang);
    
    // Add event listeners for language switcher
    document.querySelectorAll('[onclick^="changeLanguage"]').forEach(element => {
        const lang = element.getAttribute('onclick').split("'")[1];
        element.addEventListener('click', function(e) {
            e.preventDefault();
            changeLanguage(lang);
        });
    });
}

// Change language function
function changeLanguage(lang) {
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update form placeholders
    if (document.getElementById('nombre')) {
        document.getElementById('nombre').placeholder = (lang === 'es') ? 'Tu nombre' : 'Your name';
    }
    if (document.getElementById('email')) {
        document.getElementById('email').placeholder = 'Email';
    }
    if (document.getElementById('mensaje')) {
        document.getElementById('mensaje').placeholder = (lang === 'es') ? 'Tu mensaje aquí...' : 'Your message here...';
    }
}
  window.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
      video.play().catch(error => {
        console.warn("Error al reproducir un video automáticamente:", error);
      });
    });
  });
document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const horario = document.getElementById('horario').value;
    const destino = document.getElementById('destino').value;
    const fecha = document.getElementById('fecha').value;
    const personas = document.getElementById('personas').value;
    const mensaje = document.getElementById('mensaje').value;

    const texto = `Hola, quiero hacer una reserva:%0A
Nombre: ${nombre}%0A
Horario de salida: ${horario}%0A
Destino: ${destino}%0A
Fecha: ${fecha}%0A
Cantidad de personas: ${personas}%0A
Mensaje adicional: ${mensaje}`;

    const numeroWhatsApp = '5493884376850';
    const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

    window.open(url, '_blank');
});