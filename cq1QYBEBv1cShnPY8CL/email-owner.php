<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['email']) && isset($_POST['message'])) {
  $contact = $_POST['email'];
  $message = $_POST['message'];

  $to = "atomicnicos@gmail.com";
  $subject = "Contact Form used on atomicnicos.me";

  $mail_content = "Message from: '" . $contact . "'<br/>";
  $mail_content .= "Message:<br/>" . str_replace('\n', '<br/>', $message);

  $header = "From:contact-form@atomicnicos.me \r\n";
  $header .= "MIME-Version: 1.0\r\n";
  $header .= "Content-type: text/html\r\n";

  // ######## $retval = mail ($to,$subject,$mail_content,$header);

  if ($retval) {
    echo "200";
  } else {
    echo "503";
  }
} else {
  echo "503";
}
?>
