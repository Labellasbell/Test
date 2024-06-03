// CheckoutController.js
const CheckoutService = require('./CheckoutService');

class CheckoutController {
    constructor() {
        this.checkoutService = new CheckoutService();
    }

    handleOrder(req, res) {
        const order = req.body;
        this.checkoutService.processOrder(order);
        res.send('Order processed successfully');
    }
}

module.exports = CheckoutController;
