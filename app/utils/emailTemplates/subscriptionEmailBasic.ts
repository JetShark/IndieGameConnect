export const getSubscriptionEmailHTML = (firstName: string, newsletterName: string): string => {
  const year = new Date().getFullYear();
  const dashboardUrl = `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/dashboard`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Subscription Confirmed</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #0f172a;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    
    .wrapper {
      width: 100%;
      table-layout: fixed;
      background-color: #0f172a;
      padding: 40px 0;
    }
    
    .main {
      background-color: #1e293b;
      margin: 0 auto;
      width: 100%;
      max-width: 600px;
      border-spacing: 0;
      color: #f8fafc;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid #334155;
    }
    
    .header {
      padding: 40px 20px;
      text-align: center;
      background: linear-gradient(135deg, #2563eb 0%, #9333ea 100%);
    }
    
    .content {
      padding: 40px 30px;
    }
    
    .feature-card {
      background-color: #334155;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 24px;
      border-left: 4px solid #3b82f6;
    }
    
    .btn {
      background-color: #3b82f6;
      background-image: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      color: #ffffff !important;
      padding: 16px 32px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      font-size: 16px;
      display: inline-block;
    }
    
    .footer {
      padding: 30px;
      text-align: center;
      color: #94a3b8;
      font-size: 12px;
    }

    @media only screen and (max-width: 600px) {
      .content {
        padding: 30px 20px;
      }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <!--[if (gte mso 9)|(IE)]>
    <table width="600" align="center"><tr><td>
    <![endif]-->
    <table class="main" align="center">
      <!-- Header -->
      <tr>
        <td class="header">
          <h1 style="margin:0; font-size: 32px; font-weight: 800; letter-spacing: -0.025em; color: #ffffff;">
            IndieGameConnect
          </h1>
        </td>
      </tr>
      
      <!-- Body -->
      <tr>
        <td class="content">
          <h2 style="font-size: 24px; margin: 0 0 16px; color: #ffffff; font-weight: 700;">
            You're on the list! 📬
          </h2>
          <p style="font-size: 16px; line-height: 1.6; color: #cbd5e1; margin: 0 0 24px;">
            Hi ${firstName}, you have successfully subscribed to the <strong>${newsletterName}</strong> mailing list.
          </p>
          
          <div class="feature-card">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding: 5px 0;">
                  <strong style="display: block; color: #ffffff; font-size: 16px; margin-bottom: 4px;">Subscription Confirmed</strong>
                  <span style="color: #94a3b8; font-size: 14px; line-height: 1.4;">
                    You will now receive the latest devlogs, updates, and exclusive announcements directly in your inbox.
                  </span>
                </td>
              </tr>
            </table>
          </div>
          
          <p style="font-size: 14px; color: #94a3b8; line-height: 1.6; margin: 0 0 32px;">
            You can manage your notification settings or unsubscribe at any time from your member dashboard.
          </p>
          
          <div style="text-align: center; margin: 20px 0 10px;">
            <a href="${dashboardUrl}" class="btn">
              Go to Dashboard
            </a>
          </div>
        </td>
      </tr>
      
      <!-- Footer -->
      <tr>
        <td class="footer">
          <p style="margin: 0 0 8px;">
            &copy; ${year} Indie Game Connect. All rights reserved.
          </p>
          <p style="margin: 0;">
            This email was sent to confirm your subscription to ${newsletterName}.
          </p>
        </td>
      </tr>
    </table>
    <!--[if (gte mso 9)|(IE)]>
    </td></tr></table>
    <![endif]-->
  </div>
</body>
</html>`;
};
