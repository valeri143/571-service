<?php
// Путь к файлам  
require '/PHPMailer/src/PHPMailer.php';
require '/PHPMailer/src/SMTP.php';
header('Content-Type: application/json');

// Получаем данные из тела запроса
$data = json_decode(file_get_contents("php://input"), true);

if ($data && isset($data['name']) && isset($data['number'])) {
    // Извлекаем данные
    $name = $data['name'];
    $number = $data['number'];



    // Пример ответа от сервера
    echo json_encode(['success' => true, 'message' => 'Данные успешно получены и обработаны на сервере']);
} else {
    // Если данные не были переданы или неверный формат данных
    echo json_encode(['success' => false, 'message' => 'Ошибка: неверный формат данных']);
}


//  объект PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

//  параметры SMTP сервера 
$mail->isSMTP();
$mail->CharSet = "UTF-8";
$mail->Host = 'zzz.com.ua';
$mail->SMTPAuth = true;
$mail->Username = 'send@sto-service.zzz.com.ua';
$mail->Password = 'password';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

//   отправитель и получатель, тема и текст письма.

$mail->setFrom('send@sto-service.zzz.com.ua', '571 Service');
$mail->addAddress('sto@571.com.ua', 'Me');
$mail->Subject = 'Спасибо что выбрали наше СТО!';
// Set HTML 
$mail->isHTML(TRUE);
$mail->Body = '<html>Імя:' . $name . ' Телефон:' . $number . '</html>';
$mail->AltBody = 'Повідомлення з сайту СТО';


// Отправляем письмо
if ($mail->send()) {
    echo 'Письмо успешно отправлено';
} else {
    echo 'Ошибка при отправке письма: ' . $mail->ErrorInfo;
}
?>
