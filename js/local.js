// For all forms we will need to add this.
$("#formContact").submit(function(e){
    e.preventDefault();
    if ($("#formContact > :submit").hasClass("disabled")) {
        return
    }
    PostForm("#formContact", "/api/open/contact");
});
$("#formInvoice").submit(function(e){
    e.preventDefault();
    if ($("#formInvoice > :submit").hasClass("disabled")) {
        return
    }
    /* api/auth/invoice */
    PostForm("#formInvoice", "/api/auth/test");
});
/* Clear content on hide */
$('.modal').on('hidden.bs.modal', function(){
    $("#formContact")[0].reset();
    $("#formContact-success").html("");

    $("#formInvoice")[0].reset();
    $("#formInvoice-success").html("");

    $("#formBooking")[0].reset();
    $("#formBooking-success").html("");
});
/* On booking's modal show, get the calendar and set html() */
$('#formBookingModal').on('show.bs.modal', function (e) {
    $.post( "/api/open/calendar", function(d) {
      $( "#bookingCalendar" ).html(d);
    });

})
// using latest bootstrap so, show.bs.modal
//$('#modal-form-edit').on('show.bs.modal', function(e) {
//  var product = $(e.relatedTarget).data('id');
//  $("#product_name").val(product);
//});

/*
 * Functions below
 */

// PostForm will serialize a form based on id and will then post it to action.
// The success will be set on id-success and error on id-error.
function PostForm(id, action) {
    datastring = $(id).serialize();
    // alert(datastring); // test test test
    $.ajax({
        type: "POST",
        url: action,
        data: datastring,
        success: function() {
            PostSuccess(id+"-success");
            $(id).trigger("reset");
        },
        error: PostError(id+"-success"),
    });
}

function PostSuccess(id) {
    $(id).html("<div class='alert alert-success'>");
    $(id + "> .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append( "</button>");
    $(id + "> .alert-success").append("<strong lang=\"nl\">Bericht is succesvol verzonden.</strong>");
    $(id + "> .alert-success").append("<strong lang=\"en\">Message has been successfully sent.</strong>");
    $(id).append('</div>');
}

function PostError(id) {
    $(id).html("<div class='alert alert-danger'>");
    $(id + "> .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append( "</button>");
    $(id + "> .alert-danger").append("<strong lang=\"nl\">Er ging iets verkeerd.<strong>");
    $(id + "> .alert-danger").append("<strong lang=\"en\">Something went wrong.</strong>");
    $(id).append('</div>');
}

// BookingSetDate will set the date in the bookings form, from the calendar.
function BookingSetDate(d) {
}
