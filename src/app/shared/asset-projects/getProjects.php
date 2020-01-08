<?php

include('conn.php');

$sql = "SELECT * FROM `projects`";
$result = $DB->query($sql) or die ("failed to query".mysqli_error($DB));
$data = array();

while($row = $result->fetch_assoc()):
{
    array_push($data,$row);
}
endwhile;

echo json_encode($data);
?>