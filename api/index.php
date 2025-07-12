<?php

require_once 'func.php';

$helper = new Helper();
$helper->setHeaders();

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '../.env');
$dotenv->load();

try {
  if (empty($_REQUEST['func'])) {
    die($helper->json(false, "Invalid request"));
  }

  if ($_REQUEST['func'] == 'subscribe') {
    if (empty($_REQUEST['email'])) {
      die($helper->json(false, "Email is required"));
    }

    $dataDir = "../.data";
    if (!is_dir($dataDir)) {
      mkdir($dataDir, 0755, true);
    }
    $dataFile = $dataDir .'/subscribe.json';
    if (!file_exists($dataFile)) {
      file_put_contents($dataFile, '{"emails": [], "updated_at": null}');
    }

    $data = file_get_contents($dataFile);
    $data = json_decode($data, true);

    $found = false;
    foreach($data['emails'] as $i => $email) {
      if ($email['email'] == $_REQUEST['email']) {
        $data['emails'][$i]['updated_at'] = date('Y-m-d H:i:s');
        $found = true;
        break;
      }
    }
    if (!$found) {
      $data['emails'][] = ['email' => $_REQUEST['email'], 'created_at' => date('Y-m-d H:i:s'), 'updated_at' => date('Y-m-d H:i:s')];
    }

    $data['updated_at'] = date('Y-m-d H:i:s');

    file_put_contents($dataFile, json_encode($data));

    die($helper->json(true, "Your email has been added to our subscribe list"));
  }

  if ($_REQUEST['func'] == 'contact') {
    $fields = ['firstName', 'lastName', 'email', 'phone', 'message', 'company', 'inquiry'];
    foreach($fields as $field) {
      if (empty($_REQUEST[$field])) {
        die($helper->json(false, "$field is required"));
      }
    }

    $data = [
      'firstName' => $_REQUEST['firstName'],
      'lastName' => $_REQUEST['lastName'],
      'email' => $_REQUEST['email'],
      'phone' => $_REQUEST['phone'],
      'message' => $_REQUEST['message'],
      'company' => $_REQUEST['company'],
      'inquiry' => $_REQUEST['inquiry'],
    ];

    if ($helper->sendEmail($data)) {
      die($helper->json(true, "Your message has been sent successfully"));
    } else {
      die($helper->json(false, "Something went wrong"));
    }
  }

  if ($_REQUEST['func'] == 'create-account') {
    $fields = ['firstName', 'lastName', 'email', 'phone', 'company', 'profile', 'platforms'];
    foreach($fields as $field) {
      if (empty($_REQUEST[$field])) {
        die($helper->json(false, "$field is required"));
      }
    }

    $uploadDir = "../cdn";
    if (!is_dir($uploadDir)) {
      mkdir($uploadDir, 0755, true);
    }
    $uploadDir = "../cdn/".date('Ymd');
    if (!is_dir($uploadDir)) {
      mkdir($uploadDir, 0755, true);
    }

    $uploadedUrls = [];
    if (isset($_FILES['files'])) {
      $files = $_FILES['files'];

      for ($i = 0; $i < count($files['name']); $i++) {
          if ($files['error'][$i] !== UPLOAD_ERR_OK) continue;

          $originalName = basename($files['name'][$i]);
          $extension = pathinfo($originalName, PATHINFO_EXTENSION);
          $safeName = uniqid('file_', true) . '.' . $extension;
          $targetPath = $uploadDir .'/'. $safeName;

          if (move_uploaded_file($files['tmp_name'][$i], $targetPath)) {
              $baseUrl = "https://" . $_SERVER['HTTP_HOST'] . '/cdn';
              $uploadedUrls[] = $baseUrl . '/' . $targetPath;
          }
      }
    }

    $data = [
      'firstName' => $_REQUEST['firstName'],
      'lastName' => $_REQUEST['lastName'],
      'email' => $_REQUEST['email'],
      'phone' => $_REQUEST['phone'],
      'company' => $_REQUEST['company'],
      'profile' => $_REQUEST['profile'],
      'platforms' => json_encode($_REQUEST['platforms']),
      'docs' => $uploadedUrls
    ];

    if ($helper->sendEmail($data, 'register')) {
      die($helper->json(true, "Your data has been sent successfully"));
    } else {
      die($helper->json(false, "Something went wrong"));
    }
  }

  die($helper->json(false, "Invalid method"));
} catch (Exception $e) {
  $helper->log->error($e->getMessage());
  die($helper->json(false, $e->getMessage()));
}