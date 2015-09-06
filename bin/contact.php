<?php
$name = $_POST['inputName'];
$date = trim($_POST['inputDate']);
$size = $_POST['inputSize'];
$email = $_POST['inputEmail'];
$tour = $_POST['inputTour'];
$message = $_POST['inputMessage'];
$tel = $_POST['inputTel'];
$type = $_POST['formType'];

if (empty($name) || empty($email)) {
	return false;
}

# put in log as fast as possible.
error_log("nlgids: $name, $tour, $email, $message, $type");

$tourinfo="";
if (!empty($tour)) {
    $tourinfo = "
* Tour....: $tour
* Naam....: $name ($email)
* Tel.....: $tel
* Datum...: $date
* Personen: $size";
}

switch ($type) {
case "":
case "bookingNav":
case "bookingTour":
    $subject= "[NLgids] Reservering voor \"$tour\" van \"$name\"";
    $body = <<<EOF
Hallo Ans,

Er is een nieuwe reservering gemaakt, met de volgende details:

* Naam: $name ($email)

* Tel.....: $tel
* Tour....: $tour
* Datum...: $date
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

* Naam..: $name ($email)
* Tel...: $tel
$tourinfo

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
if ( ! mail("ans@nlgids.london",$subject,$body,$headers) ) {
    return false;
}
return true;
?>
