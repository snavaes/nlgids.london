/*
 * Loosy javascript experiments.
  Jquery Validation using jqBootstrapValidation
*/
$(function() {
 $("input[name='adminBooking'],textarea[name='adminBooking']").jqBootstrapValidation(
    {
     preventSubmit: true,
     submitError: function($form, event, errors) {
      // something to have when submit produces an error ?
      // Not decided if I need it yet
     },
     submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
       var adminTour    = $("select#adminTour").val();
       var adminPersons = $("input#adminPersons").val();
       var adminTime    = $("input#adminTime").val();
       var adminDuration= $("input#adminDuration").val();

       var adminCost    = $("input#adminCost").val();
       var adminDate    = $("input#adminDate").val();
       var adminName    = $("input#adminName").val();
       var adminFullName= $("input#adminFullName").val();
       var adminEmail   = $("input#adminEmail").val();
       var adminWhere   = $("textarea#adminWhere").val();
       var adminHow     = $("textarea#adminHow").val();

	 $.ajax({
                url: "../bin/invoice.php",
            	type: "POST",
            	data: {adminTour: adminTour, adminPersons: adminPersons, adminTime: adminTime, adminDuration: adminDuration,
                    adminCost: adminCost, adminDate: adminDate, adminName: adminName, adminFullName: adminFullName, adminEmail: adminEmail,
                    adminWhere: adminWhere, adminHow: adminHow},
            	cache: false,
            	success: function() {
            	// Success message
            	   $('.success').html("<div class='alert alert-success'>");
            	   $('.success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            		.append( "</button>");
                          $('.success > .alert-success').append("<strong>PDF wordt verzonden. </strong>");
 		  $('.success > .alert-success')
 			.append('</div>');

 		  //clear all fields
 		  $('#adminBooking').trigger("reset");
 	      },
 	   error: function() {
 		// Fail message
 		 $('.success').html("<div class='alert alert-danger'>");
            	$('.success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            	 .append( "</button>");
                      $('.success > .alert-danger').append("<strong>Sorry, er lijkt iets mis te gaan...</strong> Sorry voor het ongemak!");
 	        $('.success > .alert-danger').append('</div>');
 		//clear all fields
 		$('#adminBooking').trigger("reset");
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
$('#adminBooking').on('hidden.bs.modal', function () {
     $('.success').html('');
});

$('#adminBooking').on('shown.bs.modal', function () {
      $('#adminTour').focus();
});
