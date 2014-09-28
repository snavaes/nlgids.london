<?php
#if(empty($_POST['inputName']) || empty($_POST['inputEmail']) {
#	return false;
#}

$name = $_POST['inputName'];
$date = trim($_POST['inputDate']);
$size = $_POST['inputSize'];
$email = $_POST['inputEmail'];
$tour = $_POST['inputTour'];
$message = $_POST['inputMessage'];
$type = $_POST['formType'];

switch ($type) {
case "":
case "bookingNav":
case "bookingTour":
    $subject= "[NLgids] Reservering voor \"$tour\" van \"$name\"";
    $body = <<<EOF
Hallo Ans,

Er is een nieuwe reservering gemaild, met de volgende details:

* Tour: $tour
* Naam: $name ($email)
* Datum: $date
* Personen: $size

Het volgende bericht is achtergelaten:

=======================
$message
=======================

Met vriendelijke groet,
    NLgids mailer
EOF;
    break;
case "contact":
    $subject= "[NLgids] Contact van \"$name\"";
    $body = <<<EOF
Hallo Ans,

Er is een contact formulier ingevuld, met de volgende details:

* Naam: $name ($email)

En het volgende bericht is achter gelaten:

=======================
$message
=======================

Met vriendelijke groet,
    NLgids mailer
EOF;
    break;
}

$headers = "From: nlgids@nlgids.london\n";
$headers .= "Reply-To: $email\n";
if ( ! mail("miek@miek.nl",$subject,$body,$headers) ) {
    return false;
}
#if ( ! mail("ans@nlgids.london",$subject,$body,$headers) ) {
#    return false;
#}
return true;
?>
