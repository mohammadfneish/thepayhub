<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Formatter\LineFormatter;
use Mailgun\Mailgun;

class Helper {
  public $log;

  public function __construct() {
    $this->log = new Logger('ThePayHub');
    $handler = new StreamHandler(__DIR__ . '/../logs/app.log', Logger::DEBUG);
    $formatter = new LineFormatter(null, null, true, true);
    $handler->setFormatter($formatter);
    $this->log->pushHandler($handler);

    $this->setHeaders();
  }

  private function sendEmailBySendGrid($data, $templateId='contact') {
    $templateIds = [
      'contact' => $_ENV['SENDGRID_TEMPLATE_ID_CONTACT'],
      'register' => $_ENV['SENDGRID_TEMPLATE_ID_REGISTER'],
    ];

    $emailData = [
      'personalizations' => [[
        'to' => [['email' => $_ENV['TO_EMAIL'], 'name' => $_ENV['TO_NAME']]],
        'dynamic_template_data' => $data
      ]],
      'from' => ['email' => $_ENV['FROM_EMAIL'], 'name' => $_ENV['FROM_NAME']],
      'template_id' => $templateIds[$templateId]
    ];

    // cURL setup
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $_ENV['SENDGRID_API_URL']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($emailData));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
      'Authorization: Bearer '.$_ENV['SENDGRID_API_KEY'],
      'Content-Type: application/json'
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    if (curl_errno($ch)) {
      $this->log->error(curl_error($ch));
      return false;
    }

    curl_close($ch);
    return true;
  }

  private function sendEmailByGoogle($data, $templateId='contact') {
    $mail = new PHPMailer(true);

    try {
      // Server settings
      $mail->isSMTP();
      $mail->SMTPAuth   = true;
      $mail->Host       = $_ENV['GMAIL_SMTP_HOST'];
      $mail->Username   = $_ENV['GMAIL_SMTP_USERNAME'];
      $mail->Password   = $_ENV['GMAIL_SMTP_PASSWORD'];
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
      $mail->Port       = intval($_ENV['GMAIL_SMTP_PORT']);
      $mail->SMTPOptions = [
        'ssl' => [
          'verify_peer' => false,
          'verify_peer_name' => false,
          'allow_self_signed' => true,
        ],
      ];
      $mail->Timeout = 30;

      // Recipients
      $mail->setFrom($_ENV['FROM_EMAIL'], $_ENV['FROM_NAME']);
      $mail->addAddress($_ENV['TO_EMAIL'], $_ENV['TO_NAME']);

      require_once 'templates/' . $templateId . '.php';

      // Content
      $mail->isHTML(true);
      $mail->Subject = 'ThePayHub ' . ucfirst($templateId);
      $mail->Body    = getEmailBody($data);

      $mail->send();
      return true;
    } catch (Exception $e) {
      $this->log->error($e->getMessage());
      return false;
    }
  }

  private function sendEmailByMailgun($data, $templateId='contact') {
    require_once 'templates/' . $templateId . '.php';
    $body = getEmailBody($data);

    if (!empty($_ENV['MAILGUN_API_KEY'])) {
      $mg = Mailgun::create($_ENV['MAILGUN_API_KEY']);
      $result = $mg->messages()->send(
        $_ENV['MAILGUN_API_DOMAIN'],
        [
          'from' => $_ENV['FROM_NAME'] . ' <' . $_ENV['FROM_EMAIL'] . '>',
          'to' => $_ENV['TO_NAME'] . ' <' . $_ENV['TO_EMAIL'] . '>',
          'subject' => 'ThePayHub ' . ucfirst($templateId),
          'html' => $body
        ]
      );

      return $result;
    } else {
      $mail = new PHPMailer(true);
  
      try {
        // Server settings
        $mail->isSMTP();
        $mail->SMTPAuth   = true;
        $mail->Host       = $_ENV['MAILGUN_SMTP_HOST'];
        $mail->Username   = $_ENV['MAILGUN_SMTP_USERNAME'];
        $mail->Password   = $_ENV['MAILGUN_SMTP_PASSWORD'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = intval($_ENV['MAILGUN_SMTP_PORT']);
        $mail->SMTPOptions = [
          'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true,
          ],
        ];
        $mail->Timeout = 30;
  
        // Recipients
        $mail->setFrom($_ENV['FROM_EMAIL'], $_ENV['FROM_NAME']);
        $mail->addAddress($_ENV['TO_EMAIL'], $_ENV['TO_NAME']);
  
        
  
        // Content
        $mail->isHTML(true);
        $mail->Subject = 'ThePayHub ' . ucfirst($templateId);
        $mail->Body    = $body;
  
        $mail->send();
        return true;
      } catch (Exception $e) {
        $this->log->error($e->getMessage());
        return false;
      }
    }
  }

  private function sendEmailByResend($data, $templateId='contact') {
    require_once 'templates/' . $templateId . '.php';
    $body = getEmailBody($data);

    if (!empty($_ENV['RESEND_API_KEY'])) {
      $data = [
        'from' => $_ENV['FROM_NAME'] . ' <' . $_ENV['FROM_EMAIL'] . '>',
        'to' => $_ENV['TO_NAME'] . ' <' . $_ENV['TO_EMAIL'] . '>',
        'subject' => 'ThePayHub ' . ucfirst($templateId),
        'html' => $body
      ];

      $ch = curl_init('https://api.resend.com/emails');
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_POST, true);
      curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $_ENV['RESEND_API_KEY'],
      ]);
      curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

      $response = curl_exec($ch);

      $res = true;
      if (curl_errno($ch)) {
        $this->log->error('Curl error: ' . curl_error($ch));
        $res = false;
      }
      else {
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        if ($httpCode === 200) {
          $result = json_decode($response, true);
          $this->log->info("Send email successfully: " . json_encode($result));
          $res = true;
        } else {
          $this->log->error("Failed to send email. Status code: $httpCode\n" . $response);
          $res = false;
        }
      }

      curl_close($ch);

      return $res;
    } else {
      $mail = new PHPMailer(true);
  
      try {
        // Server settings
        $mail->isSMTP();
        $mail->SMTPAuth   = true;
        $mail->Host       = $_ENV['RESEND_SMTP_HOST'];
        $mail->Username   = $_ENV['RESEND_SMTP_USERNAME'];
        $mail->Password   = $_ENV['RESEND_SMTP_PASSWORD'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = intval($_ENV['RESEND_SMTP_PORT']);
        $mail->SMTPOptions = [
          'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true,
          ],
        ];
        $mail->Timeout = 30;
  
        // Recipients
        $mail->setFrom($_ENV['FROM_EMAIL'], $_ENV['FROM_NAME']);
        $mail->addAddress($_ENV['TO_EMAIL'], $_ENV['TO_NAME']);
  
        
  
        // Content
        $mail->isHTML(true);
        $mail->Subject = 'ThePayHub ' . ucfirst($templateId);
        $mail->Body    = $body;
  
        $mail->send();
        return true;
      } catch (Exception $e) {
        $this->log->error($e->getMessage());
        return false;
      }
    }
  }

  public function sendEmail($data, $templateId='contact') {
    if ($_ENV['MAIL_DRIVER'] == 'sendgrid') {
      return $this->sendEmailBySendGrid($data, $templateId);
    }
    if ($_ENV['MAIL_DRIVER'] == 'mailgun') {
      return $this->sendEmailByMailgun($data, $templateId);
    }
    if ($_ENV['MAIL_DRIVER'] == 'resend') {
      return $this->sendEmailByResend($data, $templateId);
    }
    return $this->sendEmailByGoogle($data, $templateId);
  }

  public function setHeaders () {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');
    header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  }

  public function json($success=false, $message='', $data=[]) {
    return json_encode([
      'success' => $success,
      'message' => $message,
      'data' => $data
    ]);
  }
}