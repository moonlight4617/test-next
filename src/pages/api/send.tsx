import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SGKEY); //SendGridのAPIキー

    const msgToUser = {
      to: req.body.email,
      from: 'moonlight4617@gmail.com',
      subject: 'お問合せありがとうございました。',
      text: 'お問合せを受け付けました。回答をお待ちください。' + req.body.message,
      html: 'お問合せを受け付けました。回答をお待ちください。' + req.body.message,
    };
    const msgToHost = {
      to: "moonlight4_6_17@yahoo.co.jp",
      from: req.body.email,
      subject: 'PFページからお問合せがありました',
      text: 'お問合せ内容: ' + req.body.message,
      html: 'お問合せ内容: ' + req.body.message,
    };

    (async () => {
      try {
        const result = await sgMail.send(msgToUser);
        await sgMail.send(msgToHost);
      } catch (error: any) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body)
        }
      }
    })();
  }

  res.status(200).json({ message: 'test' });
}