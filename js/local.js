// For all forms we will need to add this.
$("#formTest").submit(function(event){
    event.preventDefault();
    PostForm("#formTest", "/api/open/contact/test");
});

// PostForm will serialize a form based on id and will then post it to action.
// The success will be called on id-success and error on id-error.
function PostForm(id, action) {
    datastring = $(id).serialize();
    $.ajax({
        type: "POST",
        url: action,
        data: datastring,
        success: PostSuccess(id+"-success"),
        error: PostError(id+"-success"),
    });
    $(id).trigger("reset");
}

function PostSuccess(id) {
    $(id).html("<div class='alert alert-success'>");
    $(id + "> .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append( "</button>");
    $(id + "> .alert-success").append("<strong>Message has been successfully sent.</strong>");
    $(id).append('</div>');
}

function PostError(id) {
    $(id).html("<div class='alert alert-danger'>");
    $(id + "> .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append( "</button>");
    $(id + "> .alert-danger").append("<strong>Something went wrong.</strong>");
    $(id).append('</div>');
}
