const { EmailService } = require('../src/EmailService');
const { OrderService } = require('../src/OrderService');


it.skip('should send email when order started', () => {
    // DEMO
});

it.skip('should return order id when started', () => {
    // DEMO
});

it.skip('should send send email with package number when order shipped', () => {
    // DEMO
});

it.skip('should handle two packages to be shipped', () => {
    // DEMO
});


// TODO: Twoim zadaniem jest napisać test, który zweryfikuje, że email wysłany z metody orderDelivered zawiera odpowiednią treść, łącznie z numerem paczki
// Metoda orderService.orderDelivered() działa podobnie jak metoda orderShipped
// Pobiera ona numer paczki z ShipmentService (metoda getDeliveredPackageNumber())
// Następnie wysyłany jest email z odpowiednią treścią



