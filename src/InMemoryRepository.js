class InMemoryRepository {
    items = [];

    get() {
        return new Promise((resolve) => resolve([...this.items]));
    }

    add(item) {
        return new Promise((resolve) => {
            this.items = [...this.items, item];
            resolve();
        });
    }

    update(item) {
        return new Promise((resolve) => {
            this.items = this.items.map(old => old.id === item.id ? item : old);
            resolve();
        });
    }

    remove(itemId) {
        return new Promise((resolve) => {
            this.items = this.items.filter(item => item.id !== itemId);
            resolve();
        });
    }
}

module.exports = { InMemoryRepository };
