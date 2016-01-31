// ExtendFormXX is a one-off function to extend an form in the form specific way
function ExtendFormXX() {

}

$(function()
{
    $(document).on('click', '.btn-add', function(e)
    {
        e.preventDefault();

        var controlForm = $('.controls form:first'),
            currentEntry = $(this).parents('.entry:first'),
            num     = $('.form-group').length,
            newNum  = new Number(num + 1),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);
    
        newEntry.find('input').val('');
        newEntry.find("input:text[id='InputIBAN']").attr('name', '' + newNum + '[InputIBAN]' );
        newEntry.find("input:text[id='InputBIC']").attr('name', '' + newNum + '[InputBIC]' );
        newEntry.find("input:text[id='InputKundenNummer']").attr('name', '' + newNum + '[InputInputKundenNummer]' );
        
        controlForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus"></span>');
    }).on('click', '.btn-remove', function(e)
    {
        $(this).parents('.entry:first').remove();

        e.preventDefault();
        return false;
    });
});
