//variables
const {data: dato, btnSee: ver_btn, form: form, con_data: cont1, con_add: cont2, container: cont3, sidebar: side} = {
	data: document.querySelector(".container .container_see_info .see_info_data .data"),
  btnSee: document.querySelector(" .sidebar .sidebar_button"),
  form: document.querySelector(".container .container_add_info form"),
  //para animaciones
  con_data: document.querySelector(".container .container_see_info .see_info_data "),
  con_add: document.querySelector(".container .container_add_info"),
  container: document.querySelector(".container"),
  sidebar: document.querySelector(".sidebar")
}

//Usaremos aquí el fetch para traer los datos 

const fetchPetition = async () => {
  const petition = await fetch("http://www.raydelto.org/agenda.php");
  return petition.json();
}


//llamando función:

fetchPetition().then((data) => { 

  //cargar estos datos en nuestra variable dato
  let info = data.map((d, i) => {
    
    let contact = `${d.nombre} ${d.apellido} - ${d.telefono}`;
    return(
    ` <div class="data_info">
        <i class="fas fa-user-circle"></i>
        <p>${contact}</p> 
      </div> `
    )
  }).flat().join('');

  dato.innerHTML = info;

  //disparamos un sweetalert, que nos dejará saber que todo ha ido bien.
  Swal.fire({
    title: 'Carga de Datos',
    text: 'Estado: Completado, todos los datos se han cargado correctamente',
    icon: 'info',
    showConfirmButton: true,
    confirmButtonColor:'#CD8AF6',
    confirmButtonText: 'Ok, i Got it!'
  })
}).catch((err) => {
  Swal.fire({
    title: 'Ups!',
    text: 'Hubo algùn problema cargando los datos, por favor, recargue la página',
    icon: 'error',
    showConfirmButton: true,
      confirmButtonColor:'#CD8AF6',
      confirmButtonText: 'Ok..'
  })
})

//un addEventListener para que cuando hagamos click en un contacto, podamos ver la info completa

dato.addEventListener("click", (e) => {
  const click = e.target;
  
  if(click.getAttribute("class") === "data"){
    return false;
  } else {
    Swal.fire({
      title: "Dato del Contacto",
      html: `<b>${click.textContent}</b>`,
      icon: 'info',
      showConfirmButton: true,
      confirmButtonColor:'#CD8AF6',
      confirmButtonText: 'Thanks!'
    })
  }
})

ver_btn.addEventListener("click", () => {
  Swal.fire({
    title: 'Información',
    text: '¿No puedes ver los contactos completo?, ¡tranquilo! Haga click al contacto que desea visualizar, y aparecerá una ventana emergente que le ayudará a ver la información del contacto. :D',
    icon: 'info',
    showConfirmButton: true,
      confirmButtonColor:'#CD8AF6',
      confirmButtonText: 'You Rock!'
  })
});
