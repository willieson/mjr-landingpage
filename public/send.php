<?php
require __DIR__ . '/vendor/phpmailer/phpmailer/src/PHPMailer.php';
require __DIR__ . '/vendor/phpmailer/phpmailer/src/SMTP.php';
require __DIR__ . '/vendor/phpmailer/phpmailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Ambil data form
$name = $_POST['nama'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$message = $_POST['pesan'] ?? '';

// Kirim Email via SMTP
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';       // Ganti sesuai SMTP Anda (misal: smtp.hostinger.com)
    $mail->SMTPAuth = true;
    $mail->Username = 'admin@mitrajayaraya.com';   // Email pengirim
    $mail->Password = 'M!tra2024';       // Password email pengirim
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Email pengirim & penerima
    $mail->setFrom('admin@mitrajayaraya.com', 'Web Mitra Jaya Raya');
    $mail->addAddress('michaelwillieson@mitrajayaraya.com'); // Tujuan

    // Konten email
    $mail->isHTML(false);
    $mail->Subject = "Pesan dari $name - $email";
    $mail->Body = "Nama: $name\nEmail: $email\nTelepon: $phone\nPesan: $message";

    $mail->send();
    header("Location: /kontak?status=success");
} catch (Exception $e) {
    error_log("Mailer Error: " . $mail->ErrorInfo);
    header("Location: /kontak?status=error");
}
