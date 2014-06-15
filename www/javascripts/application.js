$( document ).ready(function() {

//begin image capturing code
	function cameraGetPicture() {
	    navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 1});
	}

	function captureSuccess(mediaFiles) {
	    var i, len;
	    
	    var webView = new steroids.views.WebView("http://localhost/views/home/chooseSender.html");
	  	steroids.layers.push({view: webView, navigationBar: false});
	}


	function captureError(error) {
	    var msg = 'An error occurred during capture: ' + error.code;
	    navigator.notification.alert(msg, null, 'Uh oh!');
	}

	//end image capturing code

	//code to display sender footer

	$('.personRow').hammer({}).on("tap",function(event){

		$(this).children('i').toggleClass('ion-ios7-circle-outline ion-ios7-circle-filled');

		if( $('.personRow').children('i').hasClass('ion-ios7-circle-filled') ){
			$('#sendFooter').show()
		}
		else{
		    $('#sendFooter').hide()

		}

	})

}); //end document ready


//make footer appear


