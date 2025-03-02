<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "info@pmdclasses.com";  // Yahan apna email likhein
    $subject = "New Contact Form Submission from $name";
    $headers = "From: $email" . "\r\n" . "Reply-To: $email" . "\r\n";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Success";
    } else {
        echo "Error";
    }
}
?>