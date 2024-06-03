// MailController.js
const MailService = require('./MailService');

class MailController {
    constructor() {
        this.mailService = new MailService();
    }

    handleSendMail(req, res) {
        const { to, subject, body } = req.body;
        this.mailService.sendMail(to, subject, body);
        res.send('Mail sent successfully');
    }
}

module.exports = MailController;
