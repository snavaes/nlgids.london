$('#adminTour').change(function () {
    switch ($('#adminTour').val()) {
        case "Tour op Maat":
            $('#adminWhere').val("");
            $('#adminHow').val("Ik sta daar om");
            break;
        case "Van Koninklijke Huize":
            $('#adminWhere').val("bij de uitgang van Metrostation Westminster (bij het standbeeld van Boudicca, een woeste dame met paarden, naast de brug)");
            $('#adminHow').val("Ik sta daar om");
            break;
        case "Romeinen en Bankiers":
            $('#adminWhere').val("");
            $('#adminHow').val("Ik sta daar om");
            break;
        case "Veldslagen en de Blitz":
            $('#adminWhere').val("");
            $('#adminHow').val("Ik sta daar om");
            break;
        case "Vertier Toen en Nu":
            $('#adminWhere').val("");
            $('#adminHow').val("Ik sta daar om");
            break;
        case "Muziek en Theater":
            $('#adminWhere').val("");
            $('#adminHow').val("Ik sta daar om");
            break;
        case "Nederlanders in de City":
            $('#adminWhere').val("");
            $('#adminHow').val("Ik sta daar om");
            break;
        case "Fietstour Londen":
        case "Fietstour Secret London":
            $('#adminWhere').val("Waterloo treinstation, spoor 1/2");
            $('#adminHow').val("Ik kom jullie met de fiets ophalen om");
            break;
    }
});
