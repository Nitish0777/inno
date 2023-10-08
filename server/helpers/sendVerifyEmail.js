import nodemailer from "nodemailer";

const sendVerifyEmail = async (name, email, user_id) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Verify Email",
      html: `<h1>Hi ${name}</h1>
        <p>Click on the link to verify your email</p>
        <a href="http://127.0.0.1:${process.env.PORT}/verify?id=${user_id}">Click Here</a>
        `,
    };
    const result = await transporter.sendMail(mailOptions);
    if (!result) throw new Error("Unable to send Verify Mail");
    console.log("Verify Mail sent successfully", result.response);
  } catch (error) {
    console.log("Unable to send Verify Mail", error);
  }
};

module.exports = sendVerifyEmail;
