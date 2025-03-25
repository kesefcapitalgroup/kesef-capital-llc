import nodemailer from 'nodemailer';

export async function POST(req: any, res: any) {
  console.log(req.body);

  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: 'dewanwakilahmed.work@gmail.com',
    subject: `New contact from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  const info = await transporter.sendMail(mailOptions);

  console.log(info);

  res.status(200).json({ success: true });
}
