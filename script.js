const navLinks = document.querySelectorAll('header nav a');
const logoLinks = document.querySelector('.logo');
const sections = document.querySelectorAll('section');

const activePage = () => {
    const header = document.querySelector('header');

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    sections.forEach(section => {
        section.classList.remove('active');
    });
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            sections[idx].classList.add('active');
        }
    })
});

logoLinks.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');

        sections[0].classList.add('active');
    }
});

const resumenBtns = document.querySelectorAll('.boton-experiencia');

resumenBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumenDetails = document.querySelectorAll('.detalles-empleo');

        resumenBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumenDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumenDetails[idx].classList.add('active')
    });
});

// Reseteo de formulario

const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto para manejarlo con JS

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        form.reset(); // ✅ Limpia el formulario
        successMessage.style.display = 'block'; // ✅ Muestra el mensaje de éxito
      } else {
        alert('Hubo un problema al enviar el mensaje. Inténtalo de nuevo.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error de conexión. Inténtalo más tarde.');
    });
  });