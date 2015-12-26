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

if (empty($adminTour) || empty($adminCost)) {
    error_log("nlgids PDF: tour and cost is empty");
	return false;
}

# export as environment variables can call replace

# put in log as fast as possible.
error_log("nlgids PDF: $adminTour, $adminPersons, $adminTime, $adminDuration, $adminCost, $adminDate, $adminName, $adminFullName, $adminEmail,  $adminWhere, $adminHow");

return true;
?>
