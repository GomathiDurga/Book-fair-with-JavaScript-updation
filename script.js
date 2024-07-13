document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const age = form.age.value;

        // Form validation logic
        if (name && email && phone && age) {
            confirmationMessage.innerHTML = `
                <h3>Thank you for registering, ${name}!</h3>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Age: ${age}</p>
            `;
            form.reset();
        } else {
            confirmationMessage.innerHTML = `<p>Please fill in all fields.</p>`;
        }
    });
});
