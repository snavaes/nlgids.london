$(document).ready(function() {
    langcookie=document.cookie;
    switch (langcookie) {
    case 'lang=nl':
        document.body.className='nl';
        break;
    case 'lang=en':
        document.body.className='en';
        break;
    default:
        document.body.className='nl';
    }
});

// For all forms we will need to add this.
$("#formContact").submit(function(e){
    e.preventDefault();
    if ($("#formContact > :submit").hasClass("disabled")) {
        return
    }
    PostForm("#formContact", "/api/open/contact");
});
$("#formBooking").submit(function(e){
    e.preventDefault();
    if ($("#formBooking > :submit").hasClass("disabled")) {
        return
    }
    PostForm("#formBooking", "/api/open/booking");
});
$("#formInvoice").submit(function(e){
    e.preventDefault();
    if ($("#formInvoice > :submit").hasClass("disabled")) {
        return
    }
    PostForm("#formInvoice", "/api/auth/invoice");
});
/* Clear content on hide */
$('.modal').on('hidden.bs.modal', function(){
    $("#formContact").trigger("reset");
    $("#formContact-success").html("");

    $("#formInvoice").trigger("reset");
    $("#formInvoice-success").html("");

    $("#formBooking").trigger("reset");
    $("#formBooking-success").html("");
});

$('#formContactModal').on('shown.bs.modal', function (e) {
//    $('button[type="submit"]').show(); // shows both languages
    translateContact();
})

/* On booking's modal show, get the calendar and set html() */
$('#formBookingModal').on('show.bs.modal', function (e) {
//    $('button[type="submit"]').show(); // shows both languages
    translateBooking();
    // get and set the calendar
    $.post( "/api/open/calendar", function(d) {
      $( "#bookingCalendar" ).html(d);
    });
    // populate the tour input selection
    var type = $(e.relatedTarget).data('type');
    var index = $(e.relatedTarget).data('index');

    $.getJSON("/tours.json", function(data) {
        var langcookie = document.cookie;
        var options = $("#inputBookingTour");

        options.html("");

        $.each(data[type], function(key, val) {
            var dutch = data[type][key].Naam;
            var english = data[type][key].Name;
            var id = type + "/" + data[type][key].id; // cycling/custom or walks/custom
            if (key == index) {
                switch (langcookie) {
                case 'lang=en':
                    options.append($("<option />").val(id).text(english).prop('selected', true).prop('lang', 'en'));
                    break;
                case 'lang=nl':
                default:
                    options.append($("<option />").val(id).text(dutch).prop('selected', true).prop('lang', 'nl'));
                    break;
                }

            } else {
                switch (langcookie) {
                case 'lang=en':
                    options.append($("<option />").val(id).text(english).prop('lang', 'en'));
                    break;
                case 'lang=nl':
                default:
                    options.append($("<option />").val(id).text(dutch).prop('lang', 'nl'));
                    break;
                }
            }
        });
    });
})

// auth/invoice form.
$('#formInvoiceModal').on('show.bs.modal', function (e) {
    $('button[type="submit"]').show();
    $.getJSON("/tours.json", function(data) {
        var langcookie = document.cookie;
        var options = $("#inputInvoiceTour");

        options.html("");

        for (i in types = ["walks", "cycling", "specials"]) {
            $.each(data[types[i]], function(key, val) {
                var dutch = data[types[i]][key].Naam;
                var id = types[i] + "/" + data[types[i]][key].id; // cycling/custom or walks/custom
                options.append($("<option />").val(id).text(dutch));
            });
        }
    });
})
$('#inputInvoiceTour').change(function () {
    switch ($('#inputInvoiceTour').val()) {
        case "walks/custom":
            $('#inputInvoiceWhere').val("");
            $('#inputInvoiceHow').val("Ik sta daar om");
            break;
        case "specials/bus":
        case "walks/koninklijke":
            $('#inputInvoiceWhere').val("bij de uitgang van metrostation Westminster (bij het standbeeld van Boudicca, een woeste dame met paarden, naast de brug)");
            $('#inputInvoiceHow').val("Ik sta daar om");
            break;
        case "walks/romeinen":
            $('#inputInvoiceWhere').val("bij de uitgang van metrostation St. Paul");
            $('#inputInvoiceHow').val("Ik sta bij de koffieshop Caffe Nero om");
            break;
        case "walks/dutch":
            $('#inputInvoiceWhere').val("");
            $('#inputInvoiceHow').val("Ik sta daar om");
            break;
        case "cycling/london":
        case "cycling/secret":
        case "cycling/custom":
            $('#inputInvoiceWhere').val("Waterloo treinstation, spoor 1/2");
            $('#inputInvoiceHow').val("Ik kom jullie met de fiets ophalen om");
            break;
    }
});

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
    // remove submit button(s)
    $('button[type="submit"]').fadeOut(500);
}

function PostError(id) {
    $(id).html("<div class='alert alert-danger'>");
    $(id + "> .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append( "</button>");
    $(id + "> .alert-danger").append("<strong lang=\"nl\">Er ging iets verkeerd.<strong>");
    $(id + "> .alert-danger").append("<strong lang=\"en\">Something went wrong.</strong>");
    $(id).append('</div>');
}

// BookingDate will set the date in the bookings form, from the calendar.
function BookingDate(d) {
    $('input[name="date"]').val(d);
    $('#formBookingTitleNL').html("Boeking: "+d);
    $('#formBookingTitleEN').html("Booking: "+d);
}

function BookingCalendar(d) {
    $.post( "/api/open/calendar", "date=" + d, function(data) {
      $("#bookingCalendar").html(data);
    });
};
