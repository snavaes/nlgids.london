function placeholder(text) {
    langcookie=document.cookie;
    if ( langcookie == '' || langcookie == 'lang=nl' ) {
        return text;
    }
    switch (text) {
    case "Naam": return "Name";
    case "Email": return "Email";
    case "(optioneel) 06 1234 5678": return "(optional) 7777 123 456";
    case "(optioneel) Aantal personen": return "(optional) Number of persons";
    case "Bericht": return "Message";
    default: return "No translation";
    }
}
