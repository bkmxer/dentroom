<?php
$field_name = $_POST['cf_name'];
$field_email = $_POST['cf_mail'];
$field_message = $_POST['cf_message'];
$field_tel = $_POST['cf_tel'];

$mail_to = 'antonenko.dentroom@gmail.com';
$subject = 'E-MAIL от посетителя по имени: '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'tel: '.$field_tel."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);


if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Спасибо за заявку! Мы скоро с Вами свяжемся!');
		window.location = 'index.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Ошибка отправки, пожалуйста напишите нам на: antonenko-dentroom@ukr.net');
		window.location = 'index.html';
	</script>
<?php
}
?>
