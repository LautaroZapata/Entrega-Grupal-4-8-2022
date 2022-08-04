function enviar () {
    let name = document.getElementById('name').value;
    let mail = document.getElementById('mail').value;
    let phone = document.getElementById('phone').value;

    fetch ('https://crudcrud.com/api/ed1ee763fc9e43e5bb4a5211bb714b37/grupal',
    {
        headers: {"Content-Type": "application/json; charset=utf-8"},
        method: 'POST',
        body: JSON.stringify({
            nombre: name,
            email: mail,
            telefono: phone
        })
    })
    .then(response => response.json())
    .then (data =>{
        alert("Enviado con exito")
        document.getElementById('name').value="";
        document.getElementById('mail').value="";
        document.getElementById('phone').value="";
    })
}

document.addEventListener('DOMContentLoaded',() =>{
    document.getElementById('enviar').addEventListener('click',()=> {
        enviar();
    })
})