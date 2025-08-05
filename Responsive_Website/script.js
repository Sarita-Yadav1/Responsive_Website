const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact form submit
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Simple form validation is handled by HTML 'required' attributes

  formMessage.textContent = "Thank you for contacting me! I'll respond soon.";
  form.reset();

  setTimeout(() => {
    formMessage.textContent = '';
  }, 5000);
});
