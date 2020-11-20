const { ShipmentService } = require('./ShipmentService');
const { EmailService } = require('./EmailService');
const uuid = require('uuid');


class OrderService {
    constructor(emailService = new EmailService(), shipmentService = new ShipmentService()) {
        this.shipmentService = shipmentService;
        this.emailService = emailService;
    }

    orderStarted() {
        this.emailService.send(`Twoje zamówienie zostało rozpoczęte.`);
        return uuid.v4();
    }

    orderShipped(orderId) {
        const packageNumber = this.shipmentService.generatePackageNumber(orderId);
        this.emailService.send(`Twoje zamówienie zostało wysłane z numerem ${packageNumber}.`);
        return packageNumber;
    }

    orderDelivered(orderId) {
        const packageNumber = this.shipmentService.getDeliveredPackageNumber(orderId);
        this.emailService.send(`Twoja paczka numer ${packageNumber} z zamówieniem została dostarczona.`);
        return packageNumber;
    }

}

module.exports = { OrderService };
