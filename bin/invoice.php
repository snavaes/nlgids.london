<?php
# Create a bookings form
$adminTour    = $_POST["adminTour"];
$adminPersons = $_POST["adminPersons"];
$adminTime    = $_POST["adminTime"];
$adminDuration= $_POST["adminDuration"];
$adminCost    = $_POST["adminCost"];
$adminDate    = trim($_POST["adminDate"]);
$adminName    = $_POST["adminName"];
$adminFullName= $_POST["adminFullName"];
$adminEmail   = $_POST["adminEmail"];
$adminWhere   = $_POST["adminWhere"];
$adminHow     = $_POST["adminHow"];

# put in log as fast as possible.
error_log("nlgids PDF: $adminTour, $adminPersons, $adminTime, $adminDuration, $adminCost, $adminDate, $adminName, $adminFullName, $adminEmail,  $adminWhere, $adminHow");

# export as environment variables can call replace
putenv("IN_TOUR=$adminTour");
putenv("IN_PERSONS=$adminPersons");
putenv("IN_TIME=$adminTime");
putenv("IN_DURATION=$adminDuration");
putenv("IN_COST=$adminCost");
putenv("IN_DATE=$adminDate");
putenv("IN_NAME=$adminName");
putenv("IN_FULLNAME=$adminFullName");
putenv("IN_EMAIL=$adminEmail");
putenv("IN_WHERE=$adminWhere");
putenv("IN_HOW=$adminHow");

exec('/home/miek/tex/invoice/replace.sh');

return true;
?>
