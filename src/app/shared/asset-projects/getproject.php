<?php
include('conn.php');

$id = 1;

$sql = "SELECT * FROM `projects` WHERE `id`=".$id;
$result = $DB->query($sql) or die ("failed to query".mysqli_error($DB));
$row = $result->fetch_assoc();

$sql1 = "SELECT * FROM `mockup` WHERE `projID`=".$id;
$result1 = $DB->query($sql1) or die ("failed to query".mysqli_error($DB));
$mockups = array();

while($row1 = $result1->fetch_assoc()):
{
    array_push($mockups,$row1);
}
endwhile;

$finalData = array();
array_push($finalData,$row,$mockups);

echo json_encode($finalData);
?>