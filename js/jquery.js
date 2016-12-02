$(document).ready(function() {
	$("#numero").keydown(validandoNumeros);
	$("#siguiente3").click(validandoCampos);
	$(".codigo").keyup(focusInput);
	$("#siguiente").click(numeroRandom);
	$("#siguiente2").click(validandoCodigo);
	$("#regresarMapa").click(regresarMapa);


	function validandoNumeros (evento) {
		var ascii = evento.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
			return true;
		} else {
			return false;
		}
	};

	$("#numero").focus();

	function numeroRandom (){
		var longitud = $("#numero").val().length;
		var telefono = $("#numero").val();
		var numerosa = Math.round(Math.random()*900) + 99
		if (longitud == 9) {
			$("#siguiente").attr("href", "sign2.html");
			alert("LAB-"+ numerosa);}	
		else {
			$("#siguiente").removeAttr("href");
		}
		localStorage.setItem("random", numerosa);
		localStorage.setItem("celular", telefono);
	}
	
	
	var codigoUniversal = localStorage.getItem("random");
	var numeroCelular = localStorage.getItem("celular");
	$("#numeroInner").text(numeroCelular);

	$("#nombre").focus();

	function validandoCampos (evento) {
		var nombre = $("#nombre").val();
		var apellido = $("#apellido").val();
		var correo =$("#email").val();
		var check=$("#check");

		/*
		
		nombre.attr("maxlength", "20");
		nombre.attr("minlength", "2");
				
		apellido.attr("maxlength", "20");
		apellido.attr("minlength", "2");

		email.attr("maxlength", "20");
		email.attr("minlength", "2"); 

		 if (nombre.length>20&&apellido.length>20) {
    		alert("Maximo 20 caracteres")
    	}

		 if (nombre.length<2&&apellido.length<2) {
    		alert("Minimo 2 caracteres")
    	}

		 if (email.length>50) {
    		alert("Maximo 50 caracteres")
    	}

		 if (email.length<5) {
    		alert("Minimo 50 caracteres")
    	}*/
		var regexNombre = /^[a-zñáéíóúü]+$/gi;
		if (!regexNombre.test(nombre)) {
			alert("Ingresa un nombre válido");
		}

		var regexApellido = /^[a-zñáéíóúü]+$/gi;
		if (!regexApellido.test(apellido)) {
			alert("Ingresa un apellido válido");
		}
		var regexCorreo = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		if (!regexCorreo.test(correo)) {
		alert("Ingresa un correo válido");
		}

		if (nombre.length ==0 ||
			apellido.length == 0 ||
			correo.length ==0) {
			$("#siguiente3").removeAttr("href");	
		}
		if (!check.is(":checked")) {
			alert("Acepta los términos");
		}
		else{
			$("#siguiente3").attr("href", "profile.html");
		}
		localStorage.setItem("name", nombre);
		localStorage.setItem("lastname", apellido);
		localStorage.setItem("email", correo);
		
	};
		var nombreInner = localStorage.getItem("name");
		var apellidoInner = localStorage.getItem("lastname");
		var correoInner = localStorage.getItem("email");
		
		$("#nombreIngresado").text(nombreInner.charAt(0).toUpperCase() + nombreInner.slice(1).toLowerCase() + " " + apellidoInner.charAt(0).toUpperCase() + apellidoInner.slice(1).toLowerCase() );
		

	function focusInput (evento){
		var kCode = evento.keyCode;
      if($(this).val().length==$(this).attr("maxlength")){
          $(this).next().focus();
      }
      else if (kCode == 8) {
			$(this).prev().focus();
		}
  };

  $(".codigo").eq(0).focus();

  function validandoCodigo(e){
  		var codigoInputs = $(".codigo").eq(0).val() + $(".codigo").eq(1).val() + $(".codigo").eq(2).val();
  		var codigoInp = $(".codigo").val();
  		if (codigoInputs == codigoUniversal){
  			$(this).attr("href", "sign3.html");	
  		} else if (codigoInputs != codigoUniversal) {
  			alert("El código inválido.");
  		} 
  	}

   
   function regresarMapa() {
   	$(this).attr("href", "map.html");	
   }

   var f = new Date();
   var d = f.getDate();
   var m = f.getMonth() +1;
   var a = f.getFullYear();
   $("#fechaIngreso").text( d +"-"+ m +  "-" + a );

});