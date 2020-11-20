const { pricesCalculator } = require('../src/price-calculator');
const { ProductsService } = require('../src/ProductsService');

it.skip('should calculate price for all products in stock',  () => {
    // DEMO
});

const calculateTotalPriceForAllProductsInStock = async (service) => {
    return pricesCalculator().totalPriceForProducts(await service.products());
}


