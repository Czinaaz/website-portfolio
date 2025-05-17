const form = document.getElementById('contactForm');

form.addEventListener('submit', async function(e){
    e.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            form.reset();
        alert('Message sent successfully!');
        } else {
            alert('The form cannot be empty. Please fill in all fields.');
        }
        } catch (error) {
        alert('Error: ' + error.message);
        }
});