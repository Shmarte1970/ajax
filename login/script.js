document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;

    if (password1 !== password2) {
        alert('Fallo en la identificación');
        return;
    }

    document.getElementById('loginSection').classList.add('d-none');
    document.getElementById('detailsSection').classList.remove('d-none');
    document.getElementById('detailsUsername').value = username;
});

document.getElementById('detailsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('detailsUsername').value;
    const lastname = document.getElementById('lastname').value;
    const address = document.getElementById('address').value;
    const birthdate = document.getElementById('birthdate').value;

    alert(`Nombre de usuario: ${username}\nApellido: ${lastname}\nDirección: ${address}\nFecha de Nacimiento: ${birthdate}\nEsto son sus datos`);

    document.getElementById('detailsSection').classList.add('d-none');
    document.getElementById('loginSection').classList.remove('d-none');

    // Reset forms
    document.getElementById('loginForm').reset();
    document.getElementById('detailsForm').reset();
});
