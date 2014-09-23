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
$email = $_POST['inputEmail'];
$message = $_POST['inputMessage'];

// create email body and send it	
$email_subject = "Contact form submitted by:  $name";
$email_body = "You have received a new message. \n\n".
				  " Here are the details:\n \nName: $name \n ".
				  "Email: $email\n Message \n $message";
$headers = "From: contacts@myprogrammingblog.com\n";
$headers .= "Reply-To: $email";	
mail("miek@miek.nl",$email_subject,$email_body,$headers);
mail("ans@nlgids.london",$email_subject,$email_body,$headers);
return true;			
?>
