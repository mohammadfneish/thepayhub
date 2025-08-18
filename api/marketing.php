<?php

require_once 'Helper.php';
$helper = null;

try {
  $helper = new Helper();
  $dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
  $dotenv->load();

  $emails = ['mohammadfneish@gmail.com', 'mike.h@thepayhub.io'];
  foreach($emails as $email) {
    $data = [
      'email' => $email
    ];
    $helper->sendEmail($data, 'marketing');
  }

  die($helper->json(true, 'Emails sent successfully'));
} catch (Exception $e) {
  if ($helper) {
    $helper->log->error($e->getMessage());
  }
  
  die($helper->json(false, $e->getMessage()));
}