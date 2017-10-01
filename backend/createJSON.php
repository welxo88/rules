<?php
// connection
$conn = new mysqli("servername", "username", "password", "dbname");
// check connection
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error);}

$sql = "
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
";
//get data from db
$result = $conn->query($sql);

//organize info into array
$return_arr = array();
$row_array = array();
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $row_array['paragraphId'] = $row['paragraphId'];
    $row_array['paragraphText'] = $row['paragraphText'];
    $row_array['paragraphInterpretation'] = $row['paragraphInterpretation'];
    $row_array['paragraphIsSub'] = $row['paragraphIsSub'];
    $row_array['paragraphIsPartOfList'] = $row['paragraphIsPartOfList'];

    array_push($return_arr,$row_array);
    $row_array = array();
}

//print array out as json
echo json_encode($return_arr);

$conn->close();
?> 
