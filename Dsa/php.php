<?php
// Initialize a cURL session
$ch = curl_init('https://coderbyte.com/api/challenges/json/age-counting');

// Set cURL options to return the transfer as a string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);

// Execute the cURL session and store the result
$data = curl_exec($ch);

// Close the cURL session
curl_close($ch);

// Decode the JSON data to an associative array
$json_data = json_decode($data, true);

// Initialize the count of ages 50 and above
$count = 0;

// Get the 'data' string from the decoded JSON
$data_string = $json_data['data'];

// Split the string into individual items based on ', '
$items = explode(', ', $data_string);

// Loop through each item
foreach ($items as $item) {
    // Check if the item contains 'age-' to identify age items
    if (strpos($item, 'age-') !== false) {
        // Extract the age value from the item
        $age = intval(substr($item, strpos($item, 'age-') + 4));
        
        // Increment the count if the age is 50 or more
        if ($age >= 50) {
            $count++;
        }
    }
}

// Print the final count
echo $count;
?>
