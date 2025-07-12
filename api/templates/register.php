<?php

function getEmailBody($data) {
$docLinksHtml = '';
foreach ($docs as $docUrl) {
    $docLinksHtml .= "<tr><td colspan=\"2\"><a href=\"$docUrl\">$docUrl</a></td></tr>\n";
}

return <<<HTML
<html>
  <head><title></title></head>
  <body style="background-color:#fdfaf7;margin:0 auto;max-width:500px;border:1px solid #c0c0c0;border-radius:10px 10px 0 0;" align="center">
    <div style="background-color: #4a597f; color: white; padding: 10px 20px; border-radius: 10px 10px 0 0;">
      <p style="padding:5px 10px;text-align:left;font-size:18x">Dear Team,</p>
    </div>
    <div class="module" role="module" style="color:#444444; font-size:12px; line-height:20px; padding:5px;text-align:left;">
      <h3>You have received an email from {$data['firstName']} {$data['lastName']}.</h3>
      <h3>Please review the following user details.</h3>
    </div>
    <div style="width:100%;height:1px;border-top:1px dashed black; margin-bottom:10px;">&nbsp;</div>
    <div style="margin: 10px">
      <table style="background-color: white; border-radius:10px;width:100%" cellspacing=0 cellpadding=5>
          <tr><td>First name:</td><th align="left">{$data['firstName']}</th></tr>
          <tr><td>Last Name:</td><th align="left">{$data['lastName']}</th></tr>
          <tr><td>Phone:</td><th align="left">{$data['phone']}</th></tr>
          <tr><td>Email:</td><th align="left">{$data['email']}</th></tr>
          <tr><td>Company:</td><th align="left">{$data['company']}</th></tr>
          <tr><td>Profile:</td><th align="left">{$data['profile']}</th></tr>
          <tr><td>Platforms:</td><th align="left">{$data['platforms']}</th></tr>
          <tr><td colspan="2">Document Links:</td></tr>
          {$docLinksHtml}
      </table>
    </div>
    <div class="module" role="module" style="color:#444444; font-size:12px; line-height:20px; padding:16px;text-align:left;">
      <p style="font-size:12px;line-height:10px;">Best regards.</p>
      <p style="font-size:12px;line-height:10px;">ThePayHub Team.</p>
    </div>
  </body>
</html>
HTML;
}