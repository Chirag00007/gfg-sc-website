const nodeMailer = require(`nodemailer`);

const sendEmail = async (option)  => {
    const trasporter = nodeMailer.createTransport({
        host : "smtp.gmail.com",
        port : 465,
        service: process.env.SMPT_SERVICE || 'gmail',
        auth: {
          user: process.env.SMPT_MAIL || 'tarundevgan29.9.2003@gmail.com',
          pass: process.env.SMPT_PASSWORD || 'nsredcayttjeyjaf',
        },
      }); 
      const mailOption = {
        from: process.env.SMPT_MAIL || 'tarundevgan29.9.2003@gmail.com',
        to: 'devtar28k@gmail.com',
        subject: "Contacting on GFG", 
        text :   `
        User - Name: ${option.name}
        User - Email: ${option.email}
        User - PhoneNo: ${option.phoneNo}
        User - Course: ${option.course}
        Message: ${option.message}
    `
      };
    
      await trasporter.sendMail(mailOption)
}

module.exports = sendEmail