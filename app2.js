let contraseña = 123;
let saldo = 500;
let contraseñaUsuario = prompt('Ingresa la contraseña');

if (contraseñaUsuario == contraseña) {
    alert(`El saldo disponible es: ${saldo}$`);
} else {
    alert('Contraseña incorrecta');
}