const pricesCalculator = () => ({
    totalPriceForProducts(products) {
        return products.reduce((sum, current) => current.price * current.count + sum, 0);
    },
    deliveryCost(price) {
        return price < 50
          ? 20
          : price < 100
            ? 10
            : 0;
    }
});

module.exports = { pricesCalculator };

