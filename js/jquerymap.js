var cargarPagina = function() {
	if (navigator.geolocation) { 
		// también se puede usar if ("geolocation" in navigator) {}
		navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
	}
    $(".button-collapse").sideNav({
      menuWidth: 240, 
      edge: "left", 
      closeOnClick: true
        }
    )
     $(".background").attr("src", "img/fondo4.jpg").attr("width", "100%");
    var nombreInner = localStorage.getItem("name");
        var apellidoInner = localStorage.getItem("lastname");
        var correoInner = localStorage.getItem("email");
        

    $("#emailInner").text(correoInner);
    $("#nameInner").text(nombreInner.charAt(0).toUpperCase() + nombreInner.slice(1).toLowerCase() + " " + apellidoInner.charAt(0).toUpperCase() + nombreInner.slice(1).toLowerCase() );


    $("#homeClick").click(regresarProfile);
};

var funcionExito = function(posicion) {
	var lat = posicion.coords.latitude;
    var lon = posicion.coords.longitude;
    var latlon = new google.maps.LatLng(lat, lon)
    var mapa = document.getElementById('mapa')
   

    var myOptions = {
	    center:latlon,zoom:14,
	    mapTypeId:google.maps.MapTypeId.TERRAIN,
	    mapTypeControl:false,
	    navigationControlOptions:{
	    	style: google.maps.NavigationControlStyle.SMALL
	   	}
    };
    
    var map = new google.maps.Map(document.getElementById('mapa'), myOptions);

    var marker = new google.maps.Marker({
    	position:latlon,

    	map:map,
    	title:"You are here!"
    });
};

var funcionError = function (error) {
	console.log(error);
};

 function regresarProfile() {
    $(this).attr("href", "profile.html");   
   }

$(document).ready(cargarPagina);

