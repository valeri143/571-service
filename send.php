<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST"); 
header("Access-Control-Allow-Headers: Content-Type"); 
header("Content-Type: application/json");

// Путь к файлам  
require 'C:\wamp64\www\571-service\PHPMailer\src\PHPMailer.php';
require 'C:\wamp64\www\571-service\PHPMailer\src\SMTP.php';


if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST["name"];
    $number = $_POST["number"];
    $form = $_POST["form"];
if($name && $number) {
    echo 'name: ', $name, 'number: ', $number, 'Type of form: ', $form;
// Создайте объект PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

    //  параметры SMTP сервера 
$mail->isSMTP();
$mail->CharSet = "UTF-8";
$mail->Host = 'zzz.com.ua';
$mail->SMTPAuth = true;
$mail->Username = 'send@sto-service.zzz.com.ua';
$mail->Password = '1Gthcgtrnbdf2023';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

//   отправитель и получатель, тема и текст письма.

$mail->setFrom('send@sto-service.zzz.com.ua', '571 Service');
$mail->addAddress('rusofen1@gmail.com', 'Me');
$mail->Subject = 'Спасибо что выбрали наше СТО!';
// Set HTML 
$mail->isHTML(TRUE);
$mail->Body = '<html>Дякуємо, ми дуже раді <br>що Ви обрали наше СТО. Наш менеджер невдовзі звяжеться з Вами!</br> Ви Неймовірні:)</html>';
$mail->AltBody = 'Вы не помилились!!!.';


// Отправляем письмо
if ($mail->send()) {
    echo 'Письмо успешно отправлено';
} else {
    echo 'Ошибка при отправке письма: ' . $mail->ErrorInfo;
}

}
}

?>
