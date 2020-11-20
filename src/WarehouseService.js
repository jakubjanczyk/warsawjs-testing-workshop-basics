const { OrderService } = require('./OrderService');
const { EmailService } = require('./EmailService');
const { ProductsService } = require('./ProductsService');

class WarehouseService {
    constructor(
      productsService = new ProductsService(),
      emailService = new EmailService()
    ) {
        this.productsService = productsService;
        this.emailService = emailService;
    }

    async findAndNotifyOutOfStock() {
        const products = await this.productsService.products();
        const outOfStockProducts = products.filter(product => product.count === 0);
        if (outOfStockProducts.length > 0) {
            this.emailService.send(`Wyczrpane zapasy towarów: ${outOfStockProducts.join(', ')}. Uzupełnij magazyn!`);
        }
        return outOfStockProducts.map(product => product.id);
    }

    async replenishStock(productId, amount) {
        if (amount <= 0) {
            throw new Error('Incorrect amount to replenish, expecting greater than 0')
        }
        await this.productsService.addStock(productId, amount);
        this.emailService.send(`Zapas produktu ${productId} został uzupełniony o ${amount} sztuk.`);
    }

}

module.exports = { WarehouseService };
