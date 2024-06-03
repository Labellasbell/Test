// CheckoutService.test.js
const CheckoutService = require('../src/checkout/CheckoutService');

test('processOrder should process order correctly', () => {
    const checkoutService = new CheckoutService();
    checkoutService.processOrder({ customerName: 'John Doe' });
    expect(console.log).toHaveBeenCalledWith('Processing order for John Doe');
});
