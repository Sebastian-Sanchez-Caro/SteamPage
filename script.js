function LoginMandatory(){
    let nombre = document.getElementById('nombrechito').value;
    let telefono = document.getElementById('Phone').value;
    let correo = document.getElementById('email').value;
    let ciudad = document.getElementById('city').value;
    let edad = document.getElementById('age').value;
    let carrera = document.getElementById("carrera").value
    let curso = document.getElementById("curso").value
    

    alert(`Su Informacion es la siguiente:\n
    Su nombres es ${nombre}\n
    Su telefono es ${telefono}\n
    Su Emain es: ${correo}\n
    Su ciudad es: ${ciudad}\n
    Su edad es: ${edad}\n
    Usted le interesa la carrera : ${carrera}\n
    Usted le interesa el curso : ${curso}`);
}