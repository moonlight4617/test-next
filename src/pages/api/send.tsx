import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer"

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASS
    }
  });

  const toHostMailData = {
    from: `${req.body.email}`,
    to: process.env.GMAILUSER,
    subject: `【お問い合わせ】${req.body.name}様より`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
      <p>【名前】</p>
      <p>${req.body.name}</p>
      <p>【メッセージ】</p>
      <p>${req.body.message}</p>
      <p>【メールアドレス】</p>
      <p>${req.body.email}</p>
    `,
  };

  const toUserMailData = {
    from: process.env.GMAILUSER,
    to: `${req.body.email}`,
    subject: `お問合せありがとうございました。`,
    text: 'お問合せを受け付けました。回答をお待ちください。' + req.body.message,
    html: `
      <p>お問合せありがとうございました。</p>
      <p>以下の内容で受け付けましたので、返信まで今しばらくお待ちください。</p>
      <p>-------------------------</p>
      <p>【名前】</p>
      <p>${req.body.name}</p>
      <p>【メッセージ】</p>
      <p>${req.body.message}</p>
      <p>【メールアドレス】</p>
      <p>${req.body.email}</p>
    `,
  };

  try {
    console.log(req.body)
    transporter.sendMail(toHostMailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
    transporter.sendMail(toUserMailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
  } catch (error: any) {
    console.error(error);
  }

  res.status(200).json({ message: 'success' });
}