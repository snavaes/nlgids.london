/*
 * Loosy javascript experiments.
  Jquery Validation using jqBootstrapValidation
*/
$(function() {
 $("input[name='inputBooking'],textarea[name='inputBooking']").jqBootstrapValidation(
    {
     preventSubmit: true,
     submitError: function($form, event, errors) {
      // something to have when submit produces an error ?
      // Not decided if I need it yet
     },
     submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
       // get values from FORM
       var nameBooking = $("input#inputBookingName").val();
       var emailBooking = $("input#inputBookingEmail").val();
       var sizeBooking = $("input#inputBookingSize").val();
       var tourBooking = $("input#inputBookingTour").val();
       var dateBooking = $("input#inputBookingDate").val();
       var messageBooking = $("textarea#inputBookingMessage").val();
       var formtype = $("input#formContactType").val();

       langcookie=document.cookie;

       var firstName = name; // For Success/Failure Message
           // Check for white space in name for Success/Fail message
        if (firstName.indexOf(' ') >= 0) {
	   firstName = name.split(' ').slice(0, -1).join(' ');
         }
	 $.ajax({
                url: "../bin/contact.php",
            	type: "POST",
            	data: {formType: formtype, inputName: nameBooking, inputEmail: emailBooking, inputSize: sizeBooking, inputDate: dateBooking, inputTour: tourBooking, inputMessage: messageBooking},
            	cache: false,
            	success: function() {
            	// Success message
            	   $('.success').html("<div class='alert alert-success'>");
            	   $('.success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            		.append( "</button>");
                    if ( langcookie == '' || langcookie == 'lang=nl' ) {
                          $('.success > .alert-success')
                                .append("<strong>Bericht is met succes verzonden. </strong>");
                    } else {
                          $('.success > .alert-success')
                                .append("<strong>Message has been successfully sent. </strong>");
                    }
 		  $('.success > .alert-success')
 			.append('</div>');

 		  //clear all fields
 		  $('#contactForm').trigger("reset");
 		  $('#navForm').trigger("reset");
 		  $('#bookForm').trigger("reset");
 	      },
 	   error: function() {
 		// Fail message
 		 $('.success').html("<div class='alert alert-danger'>");
            	$('.success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            	 .append( "</button>");
                    if ( langcookie == '' || langcookie == 'lang=nl' ) {
                        $('.success > .alert-danger').append("<strong>Sorry "+firstName+", er lijkt iets mis te gaan...</strong> Kunt u een directe mail sturen naar <a href='mailto:ans@nlgids.london?Subject=[NLgids] reservering'>ans@nlgids.london</a> ? Sorry voor het ongemak!");
                    } else {
                        $('.success > .alert-danger').append("<strong>Sorry "+firstName+", something has gone wrong...</strong> Could you send a direct mail to <a href='mailto:ans@nlgids.london?Subject=[NLgids] booking'>ans@nlgids.london</a> ? Sorry the trouble!");
                    }
 	        $('.success > .alert-danger').append('</div>');
 		//clear all fields
 		$('#contactForm').trigger("reset");
 		$('#navForm').trigger("reset");
 		$('#bookForm').trigger("reset");
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
     $('.success').html('');
});

$('#myNav').on('hidden.bs.modal', function () {
     $('.success').html('');
});

$('#myContact').on('hidden.bs.modal', function () {
     $('.success').html('');
});

$('#myModal').on('shown.bs.modal', function () {
      $('#inputBookingDate').attr('placeholder', placeholder("  Datum"));
      $('#inputBookingSize').attr('placeholder', placeholder("Aantal personen"));
      $('#inputBookingName').attr('placeholder', placeholder("Naam"));
      $('#inputBookingMessage').attr('placeholder', placeholder("Extra vragen/opmerkingen"));
      $('#inputBookingName').focus();
});

$('#myNav').on('shown.bs.modal', function () {
      $('#inputNavDate').attr('placeholder', placeholder("  Datum"));
      $('#inputNavSize').attr('placeholder', placeholder("Aantal personen"));
      $('#inputNavName').attr('placeholder', placeholder("Naam"));
      $('#inputNavMessage').attr('placeholder', placeholder("Extra vragen/opmerkingen"));
      $('#inputNavName').focus();
});

$('#myContact').on('shown.bs.modal', function () {
      $('#inputContactName').attr('placeholder', placeholder("Naam"));
      $('#inputContactMessage').attr('placeholder', placeholder("Extra vragen/opmerkingen"));
      $('#inputContactName').focus();
});

function placeholder(text) {
    langcookie=document.cookie;
    if ( langcookie == '' || langcookie == 'lang=nl' ) {
        return text;
    }
    switch (text) {
    case "Naam":
        return "Name";
    case "Aantal personen":
        return "Number of persons";
    case "Extra vragen/opmerkingen":
        return "Questions/remarks";
    case "  Datum":
        return "  Date"; // Two spaces for silly lining
    default:
        return "No translation";
    }
}

$(document).ready(function() {
      $(".announce").click(function() { // Click to only happen on announce links
          $("#inputBookingTour").val($(this).data('id'));
      });
      $('.carousel').carousel({
          interval: 5000,
      });
      /* even out the front column lengths */
      var highestCol = Math.max($('#home-tours').height(),$('#home-guide').height(),$('#home-tips').height(), $('#home-prices').height());
      $('.home-text').height(highestCol-60);    /* why 80?? Moved to 60 when on bigger screens */
});


$(function() {
 $("input[name='inputContact'],textarea[name='inputContact']").jqBootstrapValidation(
    {
     preventSubmit: true,
     submitError: function($form, event, errors) {
      // something to have when submit produces an error ?
      // Not decided if I need it yet
     },
     submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
       // get values from FORM
       var nameContact = $("input#inputContactName").val();
       var emailContact = $("input#inputContactEmai").val();
       var messageContact = $("textarea#inputContactMessage").val();
       var formtype = $("input#formContactType").val();
       langcookie=document.cookie;

       var firstName = name; // For Success/Failure Message
           // Check for white space in name for Success/Fail message
        if (firstName.indexOf(' ') >= 0) {
	   firstName = name.split(' ').slice(0, -1).join(' ');
         }
	 $.ajax({
                url: "../bin/contact.php",
            	type: "POST",
            	data: {formType: formtype, inputName: nameContact, inputEmail: emailContact, inputMessage: messageContact},
            	cache: false,
            	success: function() {
            	// Success message
            	   $('.success').html("<div class='alert alert-success'>");
            	   $('.success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            		.append( "</button>");
                    if ( langcookie == '' || langcookie == 'lang=nl' ) {
                          $('.success > .alert-success')
                                .append("<strong>Bericht is met succes verzonden. </strong>");
                    } else {
                          $('.success > .alert-success')
                                .append("<strong>Message has been successfully sent. </strong>");
                    }
 		  $('.success > .alert-success')
 			.append('</div>');

 		  //clear all fields
 		  $('#contactForm').trigger("reset");
 		  $('#navForm').trigger("reset");
 		  $('#bookForm').trigger("reset");
 	      },
 	   error: function() {
 		// Fail message
 		 $('.success').html("<div class='alert alert-danger'>");
            	$('.success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            	 .append( "</button>");
                    if ( langcookie == '' || langcookie == 'lang=nl' ) {
                        $('.success > .alert-danger').append("<strong>Sorry "+firstName+", er lijkt iets mis te gaan...</strong> Kunt u een directe mail sturen naar <a href='mailto:ans@nlgids.london?Subject=[NLgids] reservering'>ans@nlgids.london</a> ? Sorry voor het ongemak!");
                    } else {
                        $('.success > .alert-danger').append("<strong>Sorry "+firstName+", something has gone wrong...</strong> Could you send a direct mail to <a href='mailto:ans@nlgids.london?Subject=[NLgids] booking'>ans@nlgids.london</a> ? Sorry the trouble!");
                    }
 	        $('.success > .alert-danger').append('</div>');
 		//clear all fields
 		$('#contactForm').trigger("reset");
 		$('#navForm').trigger("reset");
 		$('#bookForm').trigger("reset");
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


$(function() {
 $("input[name='inputNav'],textarea[name='inputNav'],select[name='inputNav']").jqBootstrapValidation(
    {
     preventSubmit: true,
     submitError: function($form, event, errors) {
      // something to have when submit produces an error ?
      // Not decided if I need it yet
     },
     submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
       // get values from FORM
       var nameNav = $("input#inputNavName").val();
       var emailNav = $("input#inputNavEmail").val();
       var messageNav = $("textarea#inputNavMessage").val();
       var sizeNav = $("input#inputNavSize").val();
       var tourNav = $("select#inputNavTour").val();
       var dateNav = $("input#inputNavDate").val();
       var formtype = $("input#formNavType").val();
       langcookie=document.cookie;

       var firstName = name; // For Success/Failure Message
           // Check for white space in name for Success/Fail message
        if (firstName.indexOf(' ') >= 0) {
	   firstName = name.split(' ').slice(0, -1).join(' ');
         }
	 $.ajax({
                url: "../bin/contact.php",
            	type: "POST",
            	data: {formType: formtype, inputName: nameNav, inputEmail: emailNav, inputSize: sizeNav, inputDate: dateNav, inputTour: tourNav, inputMessage: messageNav},
            	cache: false,
            	success: function() {
            	// Success message
            	   $('.success').html("<div class='alert alert-success'>");
            	   $('.success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            		.append( "</button>");
                    if ( langcookie == '' || langcookie == 'lang=nl' ) {
                          $('.success > .alert-success')
                                .append("<strong>Bericht is met succes verzonden. </strong>");
                    } else {
                          $('.success > .alert-success')
                                .append("<strong>Message has been successfully sent. </strong>");
                    }
 		  $('.success > .alert-success')
 			.append('</div>');

 		  //clear all fields
 		  $('#contactForm').trigger("reset");
 		  $('#navForm').trigger("reset");
 		  $('#bookForm').trigger("reset");
 	      },
 	   error: function() {
 		// Fail message
 		 $('.success').html("<div class='alert alert-danger'>");
            	$('.success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            	 .append( "</button>");
                    if ( langcookie == '' || langcookie == 'lang=nl' ) {
                        $('.success > .alert-danger').append("<strong>Sorry "+firstName+", er lijkt iets mis te gaan...</strong> Kunt u een directe mail sturen naar <a href='mailto:ans@nlgids.london?Subject=[NLgids] reservering'>ans@nlgids.london</a> ? Sorry voor het ongemak!");
                    } else {
                        $('.success > .alert-danger').append("<strong>Sorry "+firstName+", something has gone wrong...</strong> Could you send a direct mail to <a href='mailto:ans@nlgids.london?Subject=[NLgids] booking'>ans@nlgids.london</a> ? Sorry the trouble!");
                    }
 	        $('.success > .alert-danger').append('</div>');
 		//clear all fields
 		$('#contactForm').trigger("reset");
 		$('#navForm').trigger("reset");
 		$('#bookForm').trigger("reset");
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
