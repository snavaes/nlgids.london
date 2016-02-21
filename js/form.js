function placeholder(id) {
    langcookie=document.cookie;
    if ( langcookie == '' || langcookie == 'lang=nl' ) {
        // Dutch
        switch (id) {
            case "inputName":       return "Naam";
            case "inputEmail":      return "Email";
            case "inputPhone":      return "(optioneel) 06 1234 5678";
            case "inputPersons":    return "(optioneel) Personen";
            case "inputText":       return "Bericht";
            case "inputDate":       return "Wanneer";
            default: return "";
        }
    }
    // English
    switch (id) {
        case "inputName":       return "Name";
        case "inputEmail":      return "Email";
        case "inputPhone":      return "(optional) 7777 123 456";
        case "inputPersons":    return "(optional) Persons";
        case "inputeText":      return "Message";
        case "inputDate":       return "When";
        default: return "";
    }
}

function translateContact() {
    $('#inputName').attr('placeholder', placeholder("inputName"));
    $('#inputEmail').attr('placeholder', placeholder("inputEmail"));
    $('#inputPhone').attr('placeholder', placeholder("inputPhone"));
    $('#inputPersons').attr('placeholder', placeholder("inputPersons"));
    $('#inputText').attr('placeholder', placeholder("inputText"));
}

function translateBooking() {
    $('#inputBookingDate').attr('placeholder', placeholder("inputDate"));
    $('#inputBookingName').attr('placeholder', placeholder("inputName"));
    $('#inputBookingEmail').attr('placeholder', placeholder("inputEmail"));
    $('#inputBookingPhone').attr('placeholder', placeholder("inputPhone"));
    $('#inputBookingPersons').attr('placeholder', placeholder("inputPersons"));
    $('#inputBookingText').attr('placeholder', placeholder("inputText"));
}
