const { EmailService } = require('../src/EmailService');
const { OrderService } = require('../src/OrderService');
const uuid = require('uuid');

// Bardzo dobry artykuł na temat różnych typów "test doubles":
// https://blog.pragmatists.com/test-doubles-fakes-mocks-and-stubs-1a7491dfa3da

jest.mock('uuid', () => ({
    v4: jest.fn()
}));

it('should send email when order started', () => {
    const emailServiceMock = {
        send: jest.fn()
    }
    const orderService = new OrderService(emailServiceMock);

    orderService.orderStarted();

    expect(emailServiceMock.send).toHaveBeenCalledWith('Twoje zamówienie zostało rozpoczęte.');
});

it('should return order id when started', () => {
    uuid.v4.mockImplementation(() => '12345');
    const emailServiceMock = {
        send: jest.fn()
    }
    const orderService = new OrderService(emailServiceMock);

    const id = orderService.orderStarted();

    expect(id).toEqual('12345')
});

it('should send send email with package number when order shipped', () => {
    const emailServiceMock = {
        send: jest.fn()
    };
    const shipmentServiceMock = {
        generatePackageNumber: jest.fn()
    }
    shipmentServiceMock.generatePackageNumber.mockReturnValue('123')
    const orderService = new OrderService(emailServiceMock, shipmentServiceMock);

    orderService.orderShipped('12345');

    expect(emailServiceMock.send).toHaveBeenCalledWith('Twoje zamówienie zostało wysłane z numerem 123.');
    expect(shipmentServiceMock.generatePackageNumber).toHaveBeenCalledTimes(1);
});

it('should handle two packages to be shipped', () => {
    // DEMO
    const emailServiceMock = {
        send: jest.fn()
    };
    const shipmentServiceMock = {
        generatePackageNumber: jest.fn()
    }
    shipmentServiceMock.generatePackageNumber
      .mockReturnValueOnce('123')
      .mockReturnValueOnce('234')
    const orderService = new OrderService(emailServiceMock, shipmentServiceMock);

    orderService.orderShipped('12345');
    orderService.orderShipped('23456');

    expect(emailServiceMock.send).toHaveBeenCalledWith('Twoje zamówienie zostało wysłane z numerem 123.');
    expect(emailServiceMock.send).toHaveBeenCalledWith('Twoje zamówienie zostało wysłane z numerem 234.');
    expect(shipmentServiceMock.generatePackageNumber).toHaveBeenCalledTimes(2);
});


// TODO: Twoim zadaniem jest napisać test, który zweryfikuje, że email wysłany z metody orderDelivered zawiera odpowiednią treść, łącznie z numerem paczki
// Metoda orderService.orderDelivered() działa podobnie jak metoda orderShipped
// Pobiera ona numer paczki z ShipmentService (metoda getDeliveredPackageNumber())
// Następnie wysyłany jest email z odpowiednią treścią
it('should send send email with package number when order delivered', () => {
    const emailServiceMock = {
        send: jest.fn()
    };
    const shipmentServiceMock = {
        getDeliveredPackageNumber: jest.fn()
    }
    shipmentServiceMock.getDeliveredPackageNumber.mockReturnValue('123')
    const orderService = new OrderService(emailServiceMock, shipmentServiceMock);

    orderService.orderDelivered('12345');

    expect(emailServiceMock.send).toHaveBeenCalledWith('Twoja paczka numer 123 z zamówieniem została dostarczona.');
    expect(shipmentServiceMock.getDeliveredPackageNumber).toHaveBeenCalledTimes(1);
});


