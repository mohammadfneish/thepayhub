<?php

function getEmailBody($data) {
return <<<HTML

<html>
    <head>
      <title></title>
    </head>
    <body style="background-color:#fdfaf7;margin:0 auto;max-width:500px;border:1px solid #c0c0c0;border-radius:10px 10px 0 0;" align="center">
      <div style="background-color: #000; color: white; padding: 10px 20px; border-radius: 10px 10px 0 0;">
        <p style="padding:5px 10px;text-align:center;font-size:18x">We are issuing an urgent fraud warning</p>
      </div>
      <div class="module" role="module" style="color:#444444; font-size:12px; line-height:20px; padding:5px;text-align:left;">
        <div style="font-size:12px; padding: 10px;">
            <h2 style="font-weight:normal; font-size: 12px">Dear Customer</h2>
            <h3>Protect Yourself:</h3>
            <p class="MsoNormal"><span>✅</span> Only trust communications and platforms from our official domains<strong>: </strong><a target="_blank" rel="noopener noreferrer nofollow" href="https://payxglobal.com"><strong>https://app.payxglobal.com</strong></a>
            </p>
            <p class="MsoNormal"><span>✅</span> Our official emails end in: <strong>@payxglobal.com</strong></p>
            <p class="MsoNormal"><span>🚫</span> Never send funds, documents, or login information to anyone claiming to be us outside these verified domains.
            </p>
        </div>
        <div align="center" style="height:1px;border-top:1px solid #e0e0e0; margin-bottom:10px; max-width: 80%; margin: 0 auto;">&nbsp;</div>
        <ul style="padding-left:20px;">
            <li style="font-size:14px;line-height:25px;">Scammers are actively impersonating PayXGlobal using <b>fake platforms</b> and communication channels.</li>
            <li style="font-size:14px;line-height:25px;">These bad actors may offer <b>"better rates"</b> or faster processing to lure you in. Let us be very clear:
                <ul style="padding-left:20px;font-size:12px;line-height:25px;">
                    <li>If you engage with these fake entities, you will lose your funds.</li>
                    <li>They are not connected to us in any way.</li>
                    <li>These are fraudulent schemes meant to deceive and steal.</li>
                </ul>
            </li>
        </ul>
      </div>
      <div align="center" style="height:1px;border-top:1px solid #e0e0e0; margin-bottom:10px; max-width: 80%; margin: 0 auto;">&nbsp;</div>
      <div class="module" role="module" style="color:#444444; font-size:12px; line-height:20px; padding:5px; text-align:Center;">
        <p style="font-size:15px; line-height:20px;padding:20px;">
          If you suspect anything suspicious report it immediately <a href="mailto:support@payxglobal.com">support@payxglobal.com</a>
        </p>
        <p style="font-size:15px; line-height:20px;padding:20px;">
            We take this threat seriously and are working with our legal team to stop these fraudulent operations. Your safety and trust are our top priorities.
        </p>
      </div>
      <div class="module" role="module" style="color:#444444; font-size:12px; line-height:20px; padding:16px;text-align:left;">
        <p style="font-size:12px;line-height:10px;">Best regards.</p>
        <p style="font-size:12px;line-height:10px;">PayXGlobal Team</p>
      </div>
      <div class="module" role="module" style="color:#444444; font-size:12px; line-height:20px; padding:16px;text-align:left;">
        <p style="text-align:center;font-size:9px;line-height:20px;color:#5c5c5c">You're receiving this email because of your account on payxglobal.com. <a href="https://payxglobal.com/#unsubscribe">Unsubscribe</a> from this thread.</p>
      </div>
      
    </body>
  </html>

HTML;
}