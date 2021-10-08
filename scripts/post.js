const submit = form.children[3];

submit.addEventListener("click", (e) => {
	
	e.preventDefault();

	const name = form.children[0];
	const last = form.children[1];
	const phone = form.children[2];

	if(name.value !== "" && name.value !== null){
		if(last.value !== "" && last.value !== null){
			if(phone.value !== "" && phone.value !== null){
				postInfo(name.value, last.value, phone.value);
			} else {
				Swal.fire({
					title: "Error!",
					text: "No ha introducido el número telefónico del contacto",
					icon: "error",
					showConfirmButton: true,
      		confirmButtonColor:'#CD8AF6',
     		 	confirmButtonText: 'Ok, let me resolve this!'
				})
			}
		} else {
				Swal.fire({
          title: "Error!",
          text: "No ha introducido el apellido del contacto",
          icon: "error",
					showConfirmButton: true,
      		confirmButtonColor:'#CD8AF6',
      		confirmButtonText: 'Ok, let me resolve this'
        })  
		}
	} else {
			Swal.fire({
          title: "Error!",
          text: "No ha introducido el nombre del contacto",
          icon: "error",
					showConfirmButton: true,
     	 		confirmButtonColor:'#CD8AF6',
      		confirmButtonText: 'Ok, i Got it!'
      })  
	}
	
})

const postInfo = (name, last, phone) => {

	const infoAgenda = {
		nombre: name,
		apellido: last,
		telefono: phone
	}

  fetch("http://www.raydelto.org/agenda.php", {
    method: 'POST',
		headers: {
			'Accept': 'aplication/json'
		},
    body: JSON.stringify(infoAgenda)
  })
		.then((res) => {
    	return res.json();
  })
		.then((data) => {
			console.log(data)
			Swal.fire({
				title: "Enviado!",
				text: "Sus datos fueron enviados con éxito!",
				icon: "success",
				showConfirmButton: false,
				timer: 1500
			})

			setTimeout(() => {
				form.submit();
			}, 2000)
  })

}
