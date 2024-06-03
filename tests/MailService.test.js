// MailService.test.js
const MailService = require('../src/mail/MailService');

test('sendMail should send mail correctly', () => {
    const mailService = new MailService();
    mailService.sendMail('test@example.com', 'Test Subject', 'Test Body');
    expect(console.log).toHaveBeenCalledWith('Sending mail to test@example.com with subject Test Subject');
});
