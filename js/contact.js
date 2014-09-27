/*
  Jquery Validation using jqBootstrapValidation
*/
$(function() {

 $("input,textarea").jqBootstrapValidation(
    {
     preventSubmit: true,
     submitError: function($form, event, errors) {
      // something to have when submit produces an error ?
      // Not decided if I need it yet
     },
     submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
       // get values from FORM
       var name = $("input#inputName").val();
       var email = $("input#inputEmail").val();
       var size = $("input#inputSize").val();
       var tour = $("input#inputTour").val();
       var date = $("input#inputDate").val();
       var message = $("textarea#inputMessage").val();
        var firstName = name; // For Success/Failure Message
           // Check for white space in name for Success/Fail message
        if (firstName.indexOf(' ') >= 0) {
	   firstName = name.split(' ').slice(0, -1).join(' ');
         }
	 $.ajax({
                url: "../bin/contact.php",
            	type: "POST",
            	data: {inputName: name, inputEmail: email, inputSize: size, inputDate: date, inputTour: tour, inputMessage: message},
            	cache: false,
            	success: function() {
            	// Success message
            	   $('#success').html("<div class='alert alert-success'>");
            	   $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            		.append( "</button>");
            	  $('#success > .alert-success')
            		.append("<strong>Boeking is met succes verzonden. </strong>");
 		  $('#success > .alert-success')
 			.append('</div>');

 		  //clear all fields
 		  $('#contactForm').trigger("reset");
 	      },
 	   error: function() {
 		// Fail message
 		 $('#success').html("<div class='alert alert-danger'>");
            	$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            	 .append( "</button>");
            	$('#success > .alert-danger').append("<strong>Sorry "+firstName+", er lijkt iets mis te gaan...</strong> Kunt u een directe mail sturen naar <a href='mailto:ans@nlgids.london?Subject=[NLgids] reservering'>ans@nlgids.london</a> ? Sorry voor het ongemak!");
 	        $('#success > .alert-danger').append('</div>');
 		//clear all fields
 		$('#contactForm').trigger("reset");
 	    },
           })
         },
         filter: function() {
                   return $(this).is(":visible");
         },
       });

      $("a[data-toggle=\"tab\"]").click(function(e) {
                    e.preventDefault();
                    $(this).tab("show");
        });
  });


/* When clicking on Full hide fail/success boxes */
$('#myModal').on('hidden.bs.modal', function () {
     $('#success').html('');
});

$('#myNav').on('hidden.bs.modal', function () {
     $('#success').html('');
});

$('#myContact').on('hidden.bs.modal', function () {
     $('#success').html('');
});


$(document).ready(function(){
      $(".announce").click(function(){ // Click to only happen on announce links
          $("#inputTour").val($(this).data('id'));
      });
      $('#inputDate').attr('placeholder', "  text changed- hulk");
});
