describe('calculate discount', () => {
    // TODO: Stwórz implementację funkcji discount(totalPrice) korzystając z podejścia TDD
    // Funkcja ta przyjmuje sumę cen produktów, a zwraca liczbę będącą wartością zniżki zależną (procentowo) od sumy.
    // Założenia funkcji:
    // WAŻNE: staraj się nie czytać kolejnych punktów przed zrobieniem


    // 1. Jeśli suma wynosi 0 - brak zniżki
    it('should return 0 when total price also 0', () => {
        const currentDiscount = discount(0);

        expect(currentDiscount).toEqual(0);
    });


    // 2. Jeśli suma wynosi 49 - brak zniżki
    it('should return 0 when total price is below 50', () => {
        const currentDiscount = discount(49);

        expect(currentDiscount).toEqual(0);
    });


    // 3. Jeśli suma znajduje się w przedziale pomiędzy 50, a 99 - znikżka wynosi 5% tej sumy
    it('should return 5% discount when total price is between 50 and 99', () => {
        const currentDiscount = discount(60);

        expect(currentDiscount).toEqual(3);
    });


    // 4. Jeśli suma znajduje się w przedziale pomiędzy 100, a 149 - znikżka wynosi 10% tej sumy
    it('should return 10% discount when total price is between 100 and 149', () => {
        const currentDiscount = discount(130);

        expect(currentDiscount).toEqual(13);
    });


    // 5. Jeśli suma jest większa bądź równa 150 - znikżka wynosi 15% tej sumy
    it('should return 15% discount when total price is above 150', () => {
        const currentDiscount = discount(180);

        expect(currentDiscount).toEqual(27);
    });


    // 6. Zniżka nigdy nie może być większa niż 30
    it('should return maximum discount of 30', () => {
        const currentDiscount = discount(400);

        expect(currentDiscount).toEqual(30);
    });

});

function discount(totalPrice) {
    const priceDiscountMap = [
        {minPrice: 150, discount: 0.15},
        {minPrice: 100, discount: 0.1},
        {minPrice: 50, discount: 0.05},
        {minPrice: 0, discount: 0}
    ];
    const discountRate = priceDiscountMap.find(element => totalPrice >= element.minPrice).discount;
    return Math.min(totalPrice * discountRate, 30);
}




