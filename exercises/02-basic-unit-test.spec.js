const { pricesCalculator } = require('../src/price-calculator');

describe.skip('totalPriceForProducts', () => {
    it('should return 0 when no products', () => {
        // DEMO
    });

    it('should return sum for all products when single count of each', () => {
        // DEMO
    });

    it('should return sum for all products when more then single count', () => {
        // DEMO
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
