const { ProductsService } = require('../../src/ProductsService');
describe('remove product', () => {
    // TODO: Stwórz implementację metody productsService.removeProduct(productId) korzystając z podejścia TDD
    // productsService.removeProduct(productId)

    // 1. Usuniętego produktu nie da się pobrać za pomocą serwisu
    // HINT: Na początku dodaj produkt za pomocą productsService.addProduct(product)
    // HINT: Dodaj odpowiednią metodę w klasie InMemoryRepository
    it('should allow to remove product', async () => {
        const productsService = new ProductsService();
        await productsService.addProduct({id: '1', count: 10})

        await productsService.removeProduct('1');

        expect(await productsService.products()).toEqual([]);
    });


    // 2. Próba usunięcia nieistniejącego produktu powinna zakończyć się rzuceniem wyjątku
    // HINT: użyj asercji expect().rejects.toThrowError
    it('should return error when removing non-existing product', async () => {
        const productsService = new ProductsService();
        await productsService.addProduct({id: '1', count: 10})

        await expect(productsService.removeProduct('2')).rejects.toThrowError('Nie można usunąć elemntu, który nie istnieje');
        expect(await productsService.products()).toEqual([{id: '1', count: 10}]);
    });

});
