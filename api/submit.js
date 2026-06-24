const { del } = require('@vercel/blob');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const {
      name,
      phone,
      email,
      role,
      propertyType,
      address,
      purpose,
      bedrooms,
      price,
      size,
      notes,
      callTime,
      blobUrls = [],
    } = req.body;

    // Fetch each image from Blob and build attachments
    const attachments = [];
    for (const item of blobUrls) {
      const fetched   = await fetch(item.url);
      const imgBuffer = Buffer.from(await fetched.arrayBuffer());
      attachments.push({
        filename:    item.name,
        content:     imgBuffer,
        contentType: item.type,
      });
    }

    const recipients = [
      process.env.RECIPIENT_EMAIL_1,
      process.env.RECIPIENT_EMAIL_2,
      process.env.RECIPIENT_EMAIL_3,
    ].filter(Boolean).join(', ');


    console.log('SMTP_USER:', process.env.SMTP_USER);
    console.log('SMTP_PASS length:', process.env.SMTP_PASS?.length);
    console.log('SMTP_HOST:', process.env.SMTP_HOST);
    await transporter.sendMail({
      from:    process.env.SMTP_USER,
      to:      recipients,
      replyTo: email || phone,
      subject: `🏠 New Property Submission — ${propertyType} in ${address}`,
      html: `
        <div style="font-family:sans-serif;max-width:640px;margin:auto">
          <!-- Header -->
          <div style="background:#0a1628;padding:24px 32px;border-radius:8px 8px 0 0;display:flex;align-items:center;gap:16px">
            <span style="color:#c9a84c;font-size:22px;font-weight:700;letter-spacing:0.5px">Mosh Realty</span>
            <span style="color:rgba(255,255,255,0.35);font-size:13px;margin-left:4px">New Property Submission</span>
          </div>

          <!-- Body -->
          <div style="border:1px solid #e5e7eb;border-top:none;padding:32px;border-radius:0 0 8px 8px">
            <h2 style="margin:0 0 6px;color:#0a1628">New Listing Enquiry</h2>
            <p style="margin:0 0 24px;color:#6b7280;font-size:14px">Submitted via moshrealty.lk · Sell With Us form</p>

            <!-- Seller Info -->
            <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.8px;color:#9ca3af;margin:0 0 8px">Contact Details</p>
            <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:20px">
              <tr style="background:#f3f4f6">
                <td style="padding:11px 16px;font-weight:600;width:38%">Name</td>
                <td style="padding:11px 16px">${name}</td>
              </tr>
              <tr>
                <td style="padding:11px 16px;font-weight:600">WhatsApp / Phone</td>
                <td style="padding:11px 16px"><a href="tel:${phone}" style="color:#0a1628">${phone}</a></td>
              </tr>
              <tr style="background:#f3f4f6">
                <td style="padding:11px 16px;font-weight:600">Email</td>
                <td style="padding:11px 16px">${email || '—'}</td>
              </tr>
              <tr>
                <td style="padding:11px 16px;font-weight:600">Role</td>
                <td style="padding:11px 16px">${role}</td>
              </tr>
            </table>

            <!-- Property Info -->
            <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.8px;color:#9ca3af;margin:0 0 8px">Property Details</p>
            <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:20px">
              <tr style="background:#f3f4f6">
                <td style="padding:11px 16px;font-weight:600;width:38%">Type</td>
                <td style="padding:11px 16px">${propertyType}</td>
              </tr>
              <tr>
                <td style="padding:11px 16px;font-weight:600">Address / Location</td>
                <td style="padding:11px 16px">${address}</td>
              </tr>
              <tr style="background:#f3f4f6">
                <td style="padding:11px 16px;font-weight:600">Purpose</td>
                <td style="padding:11px 16px">${purpose}</td>
              </tr>
              <tr>
                <td style="padding:11px 16px;font-weight:600">Bedrooms</td>
                <td style="padding:11px 16px">${bedrooms || 'N/A'}</td>
              </tr>
              <tr style="background:#f3f4f6">
                <td style="padding:11px 16px;font-weight:600">Asking Price</td>
                <td style="padding:11px 16px">LKR ${price}</td>
              </tr>
              <tr>
                <td style="padding:11px 16px;font-weight:600">Size</td>
                <td style="padding:11px 16px">${size || 'N/A'}</td>
              </tr>
              <tr style="background:#f3f4f6">
                <td style="padding:11px 16px;font-weight:600">Best Time to Call</td>
                <td style="padding:11px 16px">${callTime}</td>
              </tr>
              <tr>
                <td style="padding:11px 16px;font-weight:600">Photos</td>
                <td style="padding:11px 16px">${attachments.length} image(s) attached</td>
              </tr>
            </table>

            <!-- Notes -->
            ${notes ? `
            <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.8px;color:#9ca3af;margin:0 0 8px">Notes / Key Features</p>
            <div style="background:#f9fafb;border-left:3px solid #c9a84c;padding:14px 18px;border-radius:4px;font-size:14px;color:#374151;line-height:1.7;margin-bottom:20px">
              ${notes}
            </div>
            ` : ''}

            <!-- CTA buttons -->
            <div style="margin-top:24px;padding:20px;background:#f9fafb;border-radius:8px;text-align:center">
              <a href="tel:${phone}" style="display:inline-block;background:#0a1628;color:#fff;padding:10px 24px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;margin-right:10px">
                📞 Call ${name}
              </a>
              <a href="https://wa.me/${phone.replace(/\D/g,'')}" style="display:inline-block;background:#25d366;color:#fff;padding:10px 24px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      `,
      attachments,
    });

    // Clean up Blob after sending
    await Promise.all(blobUrls.map(item => del(item.url)));

    res.json({ ok: true });

  } catch (err) {
    console.error('Submit form error:', err);
    res.status(500).json({ ok: false, error: err.message });
  }
};