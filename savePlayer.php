<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $name = $_POST['name'];
    $team = $_POST['team'];
    $age = $_POST['age'];
    $height = $_POST['height'];
    $position = $_POST['position'];
    $image = $_POST['image'];

    // Create player array
    $player = [
        'name' => $name,
        'team' => $team,
        'age' => (int)$age,
        'height' => (int)$height,
        'position' => $position,
        'image' => $image,
    ];

    // Load existing players
    $players = [];
    if (file_exists('json/player_card.json')) {
        $players = json_decode(file_get_contents('json/player_card.json'), true);
    }

    // Add new player
    $players[] = $player;

    // Save updated players to JSON file
    file_put_contents('json/player_card.json', json_encode($players, JSON_PRETTY_PRINT));

    // Redirect back to the form
    header('Location: test.html');
    exit();
} else {
    echo 'Invalid request.';
}
?>