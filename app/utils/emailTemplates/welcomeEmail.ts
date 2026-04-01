export const getWelcomeEmailHTML = (firstName: string): string => {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f5; font-family:Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5; padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background-color:#007853; padding:30px 40px; text-align:center;">
              <h1 style="margin:0; color:#ffffff; font-size:28px;">Welcome!</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="font-size:18px; color:#1a2b22; margin:0 0 16px;">
                Hi <strong>${firstName}</strong>!
              </p>
              <p style="font-size:16px; color:#4d6658; line-height:1.6; margin:0 0 24px;">
                Thanks for signing up. We're excited to have you on board.
                Click below to get started:
              </p>
              <p style="text-align:center; margin:30px 0;">
                <a href="\${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/dashboard"
                   style="background-color:#007853; color:#ffffff; padding:14px 32px;
                          border-radius:8px; text-decoration:none; font-weight:bold;
                          font-size:16px; display:inline-block;">
                  Go to Dashboard
                </a>
              </p>
              <p style="font-size:14px; color:#889990; margin:24px 0 0;">
                If you have any questions, just reply to this email.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f4f4f5; padding:20px 40px; text-align:center;">
              <p style="font-size:12px; color:#889990; margin:0;">
                &copy; \${new Date().getFullYear()} Indie Game Connect. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
};