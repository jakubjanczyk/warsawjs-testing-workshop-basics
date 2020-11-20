const { InMemoryRepository } = require('../src/InMemoryRepository');
const { ProductsService } = require('../src/ProductsService');

it('should return empty list if no products', async () => {
    // DEMO
    const productsService = new ProductsService();

    const products = await productsService.products();

    expect(products).toEqual([]);
});

it('should allow to add a product', async () => {
    // DEMO
    const product = { id: '1', count: 1, price: 12 };
    const productsService = new ProductsService();

    await productsService.addProduct(product);

    const allProducts = await productsService.products();
    expect(allProducts).toContain(product);
});

it('should not allow to add a product with no count', async () => {
    // DEMO
    const product = { id: '1', price: 12 };
    const productsService = new ProductsService();

    const addProductsPromise = productsService.addProduct(product);

    await expect(addProductsPromise).rejects.toThrowError('Count cannot be empty or less than 0');
});



// TODO: Napisz test, który w którym dodasz dwa produkty i sprawdzisz, że oba są pobrane po wywołaniu metody products()


// TODO: Napisz test, który doda przynamniej jeden produkt i zweryfikuje, że da się go pobrać za pomocą ID
// HINT: użyj metody productById(productId) do pobrania produktu


// TODO: Napisz test, który w którym próba dodania produktu bez pola id skutkuje rzuceniem błędu
// HINT: użyj asercji expect().rejects.toThrowError
