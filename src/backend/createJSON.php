<?php
include 'db_config.php';

// connection
$conn = new mysqli($servername, $username, $password, $dbname);
// check connection
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error);}

$sql = <<<SQL
SELECT 
	rules.ruleId, rules.ruleTextId, rules.ruleName, rules.validStart, rules.validEnd, rules.approvedDate, rules.approvedBy, rules.linkToOriginal,
	ruleSections.sectionId, ruleSections.parentSection, ruleSections.sectionHeader,
	ruleParagraph.paragraphId, ruleParagraph.paragraphText, ruleParagraph.paragraphInterpretation, ruleParagraph.paragraphIsSub, ruleParagraph.paragraphIsPartOfList 
FROM 
	ruleParagraph
INNER JOIN 
	ruleSections ON ruleSections.ruleId=ruleParagraph.ruleId AND ruleSections.sectionId=ruleParagraph.sectionId
INNER JOIN 
	rules ON ruleSections.ruleId=rules.ruleId
ORDER BY
	LENGTH(rules.ruleId), rules.ruleId, LENGTH(ruleSections.sectionId), ruleSections.sectionId, LENGTH(ruleParagraph.paragraphId), ruleParagraph.paragraphId
SQL;

if ($conn->query("SET CHARACTER SET utf8") === TRUE) {    //woop-woop
}
//get data from db
if(!$result = $conn->query($sql)){
    die('There was an error running the query [' . $conn->error . ']');
}

header("Content-Type: text/json; charset=utf-8");

//organize info into array
$return_arr = array();
$row_array = array();
while ($row = $result->fetch_assoc()) {
    
    $row_array['paragraphId'] = $row['paragraphId'];
    $row_array['paragraphText'] = $row['paragraphText'];
    //$row_array['paragraphText'] = mb_convert_encoding($row['paragraphText'], "UTF-8", "UTF-8");    
    $row_array['paragraphInterpretation'] = $row['paragraphInterpretation'];
    $row_array['paragraphIsSub'] = $row['paragraphIsSub'];
    $row_array['paragraphIsPartOfList'] = $row['paragraphIsPartOfList'];

    array_push($return_arr,$row_array);
    $row_array = array();
}

//print array out as json
echo json_encode($return_arr, JSON_UNESCAPED_UNICODE);

$conn->close();
?> 
