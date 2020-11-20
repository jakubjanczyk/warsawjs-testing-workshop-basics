const { InMemoryRepository } = require('./InMemoryRepository');

class ProductsService {
    constructor(repository = new InMemoryRepository()) {
        this.repository = repository;
    }

    async products() {
        return this.repository.get();
    }

    async productById(id) {
        const all = await this.repository.get();
        return all.find(product => product.id === id);
    }

    async addProduct(product) {
        if (!product.count || product.count < 0) {
            throw new Error('Count cannot be empty or less than 0');
        }
        if (!product.id) {
            throw new Error('Cannot add a product without ID');
        }
        return this.repository.add(product);
    }

    async executeForProduct(productId, executor) {
        const product = await this.productById(productId);
        if (product) {
            executor(product);
        }
    }

    async addStock(productId, amountToAdd) {
        const product = await this.productById(productId);
        return this.repository.update({ ...product, count: product.count + amountToAdd });
    }

    async takeOutProducts(products) {
        return Promise.all(products.map(async product => {
            const fullProduct = await this.productById(product.id);
            return this.repository.update({...fullProduct, count: fullProduct.count - product.count});
        }));
    }
}

module.exports = { ProductsService };
