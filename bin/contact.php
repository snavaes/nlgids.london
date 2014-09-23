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
$email = $_POST['inputEmail'];
$tour = $_POST['inputTour'];
$message = $_POST['inputMessage'];


// create email body and send it	
$subject= "[NLgids] Boeking voor \"$tour\" van $name";
$body = <<<EOF
Hallo Ans,

Er is een nieuwe boeking gemaild, met de volgende details:
    
* Tour:  $tour
* Naam:  $name ($email)
* Datum: $date

$message
EOF;
$headers = "From: miek@miek.nl\n";
$headers .= "Reply-To: $email";	
mail("miek@miek.nl",$subject,$body,$headers);
mail("ans@nlgids.london",$subject,$body,$headers);
return true;			
?>
