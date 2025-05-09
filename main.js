 const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      status.textContent = '';
      if (!form.checkValidity()) {
        status.style.color = '#ff6b6b';
        status.textContent = 'Please fill out all fields correctly.';
        return;
      }

      
      status.style.color = '#f7c59f';
      status.textContent = 'Sending your message...';

      setTimeout(() => {
        status.style.color = '#79d279';
        status.textContent = 'Message sent successfully! I will get back to you soon.';
        form.reset();
      }, 1500);
    });