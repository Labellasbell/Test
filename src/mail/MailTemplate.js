// MailTemplate.js
class MailTemplate {
    static getTemplate(name) {
        return `<h1>Hello, ${name}!</h1>`;
    }
}

module.exports = MailTemplate;
