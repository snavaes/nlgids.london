// For all forms we will need to add this.
$("#formContact").submit(function(e){
    e.preventDefault();
    if ($("#formContact > :submit").hasClass("disabled")) {
        return
    }
    PostForm("#formContact", "/api/open/contact");
});
/* Clear content on hide */
$('.modal').on('hidden.bs.modal', function(){
    $("#formContact")[0].reset();
    $("#formContact-success").html("")
});

/*
 * Functions below
 */

// PostForm will serialize a form based on id and will then post it to action.
// The success will be set on id-success and error on id-error.
function PostForm(id, action) {
    datastring = $(id).serialize();
    alert(datastring);
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
