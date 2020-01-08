<?php
include('conn.php');

$banner = "jimbo";
$name="jimbo";
$description="jimbo";
$clientName="jimbo";
$industry="jimbo";
$type="jimbo";
$region="jimbo";
$date="jimbo";

$sql = "INSERT INTO `projects`(`banner`, `name`, `description`, `clientName`, `industry`, `type`, `region`, `date`) VALUES ('$banner','$name','$description','$clientName','$industry','$type','$region','$date')";
$result = $DB->query($sql) or die ("failed to query".mysqli_error($DB));

if($result == true)
{
    echo "done";
}
else
{
    echo "error";
}
?>