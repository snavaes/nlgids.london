$('#adminTour').change(function () {
    switch ($('#adminTour').val()) {
        case "Tour op Maat":
            $('#adminWhere').val("A");
            break;
        case "Van Koninklijke Huize":
            $('#adminWhere').val("B");
            break;
        case "Romeinen en Bankiers":
            $('#adminWhere').val("C");
            break;
        case "Veldslagen en de Blitz":
            $('#adminWhere').val("D");
            break;
        case "Vertier Toen en Nu":
            $('#adminWhere').val("E");
            break;
        case "Muziek en Theater":
            $('#adminWhere').val("F");
            break;
        case "Nederlanders in de City":
            $('#adminWhere').val("G");
            break;
        case "Fietstour Londen":
            $('#adminWhere').val("H");
            break;
        case "Fietstour Secret London":
            $('#adminWhere').val("I");
            break;
    }
});
