<?php
if($_GET['debug']==1){
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
}

include 'db_config.php';

function array_find_deep($array, $search_key, $search_value, $keys = array())
{
    foreach($array as $key => $value) {
        if (is_array($value)) {
            $sub = array_find_deep($value, $search_key, $search_value, array_merge($keys, array($key)));
            if (count($sub)) {
                return $sub;
            }
        } elseif ($value === $search_value && $key === $search_key) {
            return array_merge($keys, array($key));
        }
    }

    return array();
}


// connection
$conn = new mysqli($servername, $username, $password, $dbname);
// check connection
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error);}

/*
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
SQL;*/

$sql1 = 'SELECT * FROM rules ORDER BY LENGTH(ruleId), ruleId';
$sql2 = 'SELECT * FROM ruleSections ORDER BY LENGTH(ruleId), ruleId, CAST(sectionId AS UNSIGNED), LENGTH(sectionId), sectionId';
$sql3 = 'SELECT * FROM ruleParagraph ORDER BY LENGTH(ruleId), ruleId, CAST(sectionId AS UNSIGNED), LENGTH(sectionId), sectionId, LENGTH(paragraphId), paragraphId';

if ($conn->query("SET CHARACTER SET utf8") === TRUE) {    //woop-woop
}
//get data from db
if(!$result1 = $conn->query($sql1)){
    die('There was an error running the query1 [' . $conn->error . ']');
}
if(!$result2 = $conn->query($sql2)){
    die('There was an error running the query2 [' . $conn->error . ']');
}
if(!$result3 = $conn->query($sql3)){
    die('There was an error running the query3 [' . $conn->error . ']');
}

//result array to gather all results for final return
$result_arr = array();

//go through different rules
while($row = $result1->fetch_assoc()) {
    $row['ruleName'] = mb_convert_encoding($row['ruleName'], "UTF-8", "UTF-8");    
    
    array_push($result_arr,$row);
}

//enrich with sections
while($row = $result2->fetch_assoc()) {
    $row['sectionHeader'] = mb_convert_encoding($row['sectionHeader'], "UTF-8", "UTF-8"); 
    
    if($row['parentSection']==null){
        $address = array_find_deep($result_arr, 'ruleId', $row['ruleId']);
        
        if(!array_key_exists('sections', $result_arr[$address[0]])){
            $result_arr[$address[0]]['sections'] = array();
        }

        unset($row['ruleId'],$row['parentSection']);
        array_push($result_arr[$address[0]]['sections'],$row);
    } else {
        $rule_addr = array_find_deep($result_arr, 'ruleId', $row['ruleId']);
        
        $ref = &$result_arr[$rule_addr[0]]['sections'];
        
        $section_addr = array_find_deep($ref, 'sectionId', $row['parentSection']);

        foreach(array_slice($section_addr, 0, -1) as $addr_key) {
            $ref = &$ref[$addr_key];
        }
        
        if(!array_key_exists('subSections', $ref)){
            $ref['subSections'] = array();
        }
        unset($row['ruleId'],$row['parentSection']);

        array_push($ref['subSections'],$row);
        unset($ref);
    }
}

//enrich with paragraphs
while($row = $result3->fetch_assoc()) {
    $row['paragraphText'] = mb_convert_encoding($row['paragraphText'], "UTF-8", "UTF-8"); 
    $row['paragraphInterpretation'] = mb_convert_encoding($row['paragraphInterpretation'], "UTF-8", "UTF-8"); 
    
    $rule_addr = array_find_deep($result_arr, 'ruleId', $row['ruleId']);
    
    $ref = &$result_arr[$rule_addr[0]]['sections'];
    
    $section_addr = array_find_deep($ref, 'sectionId', $row['sectionId']);
    
    foreach(array_slice($section_addr, 0, -1) as $addr_key) {
        $ref = &$ref[$addr_key];
    }
    
    if(!array_key_exists('paragraphs', $ref)){
        $ref['paragraphs'] = array();
    }
    
    unset($row['ruleId'],$row['sectionId']);

    array_push($ref['paragraphs'],$row);
    unset($ref);
}

header("Content-Type: text/json; charset=utf-8");
//print_r($index_arr);
//print_r($result_arr);
//print array out as json
echo json_encode($result_arr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

$conn->close();
?> 
