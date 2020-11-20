const { pricesCalculator } = require('../src/price-calculator');

describe('totalPriceForProducts', () => {

    let calculator;

    beforeEach(() => {
        calculator = pricesCalculator();
    });

    it('should return 0 when no products', () => {
        // DEMO
        const products = [];

        const totalPrice = calculator.totalPriceForProducts(products);

        expect(totalPrice).toEqual(0);
    });

    it('should return sum for all products when single count of each', () => {
        // DEMO
        const products = [
            { id: '1', price: 10, count: 1 },
            { id: '2', price: 15, count: 1 },
            { id: '3', price: 30, count: 1 }
        ];

        const totalPrice = calculator.totalPriceForProducts(products);

        expect(totalPrice).toEqual(55);
    });

    it('should return sum for all products when more then single count', () => {
        // DEMO
        const products = [
            { id: '1', price: 10, count: 3 },
            { id: '2', price: 15, count: 2 },
            { id: '3', price: 30, count: 1 }
        ]

        const totalPrice = calculator.totalPriceForProducts(products);

        expect(totalPrice).toEqual(90)
    });
});


describe.skip('delivery cost', () => {
    // Napisz testy funkcji o sygnaturze: calculator.deliveryCost(productsPrice)
    // Funkcja ta zwraca koszt przesyłki, w zależności od sumy ceny produktów:
    // Jeśli cena produktów < 50, koszty przesyłki wynoszą 20
    // Jeśli cena produktów < 100, koszty przesyłki wynoszą 10
    // Jeśli cena produktów >= 100, koszty przesyłki wynoszą 0

    // TODO: Napisz przynajmniej 3 testy wryfikujące opisane działanie funkcji
    // HINT: Testy powinny być napisane z zachowaniem struktury Arrange-Act-Assert
});
