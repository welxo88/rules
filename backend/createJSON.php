 <?php
$servername = "..";
$username = "..";
$password = "..";
$dbname = "..";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

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
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?> 
