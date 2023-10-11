<?php

define('TELEGRAM_TOKEN', '6267842917:AAEB3HA775wumPUFkjFhiMmW9Mfk7HKQeys');
define('TELEGRAM_CHATID', '-1001580670246');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $number = $_POST["number"];
    $language = $_POST["language"];

    // E-mail
    $to = "sto@571.com.ua";
    $subject = "Нове повідомлення з сайту 571-service";
    $message = "Надійшов запит з сайту 571-service<br><br>Ім'я: $name<br>Номер телефону: <a href='tel:$number'>$number</a><br>Мова: $language";
    $headers = "From: site@571-service\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Telegram
    // $tg_message = "Надійшов запит з сайту msb-partner.pl\n\nІм'я: $name\nНомер телефону: $number\nМова: $language";


    // $ch = curl_init();
    // curl_setopt_array(
    //     $ch,
    //     array(
    //         CURLOPT_URL => 'https://api.telegram.org/bot' . TELEGRAM_TOKEN . '/sendMessage',
    //         CURLOPT_POST => TRUE,
    //         CURLOPT_RETURNTRANSFER => TRUE,
    //         CURLOPT_TIMEOUT => 10,
    //         CURLOPT_POSTFIELDS => array(
    //             'chat_id' => TELEGRAM_CHATID,
    //             'text' => $tg_message,
    //         ),
    //     )
    // );
    // curl_exec($ch);


    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}


?>