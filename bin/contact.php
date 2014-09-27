<?php
// check if fields passed are empty
if(empty($_POST['inputName'])  		||
   empty($_POST['inputEmail']) 		||
   empty($_POST['inputMessage'])	||
   !filter_var($_POST['inputEmail'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
#	return false;
   }

$name = $_POST['inputName'];
$date = $_POST['inputDate'];
$size = $_POST['inputSize'];
$email = $_POST['inputEmail'];
$tour = $_POST['inputTour'];
$message = $_POST['inputMessage'];
$type = $_POST['formType'];

switch ($type) {
case "":
case "booking":
    $subject= "[NLgids] Boeking voor \"$tour\" van $name";
    $body = <<<EOF
Hallo Ans,

Er is een nieuwe boeking gemaild, met de volgende details:

* Tour: $tour
* Naam: $name ($email)
* Datum: $date
* Personen: $size

Het volgende bericht is achter gelaten:

=======================
$message
=======================

Met vriendelijke groet,
    NLgids mailer
EOF;
    break;
case "contact":
    $subject= "[NLgids] Contact van $name";
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
if ( ! mail("ans@nlgids.london",$subject,$body,$headers) ) {
    return false;
}
return true;
?>
