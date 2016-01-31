// PostForm will serialize a form based on id and will then post it to action.
function PostForm(id, action) {
    datastring = $(id).serialize();

    alert(datastring)

    $.ajax({
        type: "POST",
        url: action,
        data: datastring,
        dataType: "json",
        success: function(data) {
            //var obj = jQuery.parseJSON(data); if the dataType is not specified as json uncomment this
            // do what ever you want with the server response
        },
        error: function(){
            alert('error handing here');
        }
    });
}

$("#formTest").submit(function(event){
    event.preventDefault();
    PostForm("#formTest", "/api/open/contact/test");
});
