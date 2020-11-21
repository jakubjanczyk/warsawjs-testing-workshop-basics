const { pricesCalculator } = require('../src/price-calculator');
const { ProductsService } = require('../src/ProductsService');

const mockTotalPrice = jest.fn();

jest.mock('../src/price-calculator', () => {
    return {
        pricesCalculator: jest.fn(() => {
            return {
                totalPriceForProducts: mockTotalPrice
            }
        })
    }
});

it('should calculate price for all products in stock',  async () => {
    mockTotalPrice.mockReturnValue(125);
    const productsService = {
        products: jest.fn().mockResolvedValue([{id: '1', price: 125, count: 1}])
    };

    const totalPrice = await calculateTotalPriceForAllProductsInStock(productsService);

    expect(totalPrice).toEqual(125);
    expect(mockTotalPrice).toHaveBeenCalledWith([{id: '1', price: 125, count: 1}]);
});

const calculateTotalPriceForAllProductsInStock = async (service) => {
    return pricesCalculator().totalPriceForProducts(await service.products());
}


