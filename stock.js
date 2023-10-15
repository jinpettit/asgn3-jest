class StockPortfolio{
    constructor(){
        this.portfolio = {};
    }

    getPortfolio(){
        return this.portfolio;
    }

    isEmpty() {
        return Object.keys(this.portfolio).length === 0;
    }

    purchaseStock(symbol, shares){
        this.portfolio[symbol] = shares;
    }

    countUniqueStocks() {
        return Object.keys(this.portfolio).length;
    }

    sellStock(symbol, shares) {
        if (this.portfolio[symbol] < shares) {
            throw "ShareSaleException";
        }
        this.portfolio[symbol] -= shares
    }

    currentStock(symbol){
        return this.portfolio[symbol];
    }

    updatePortfolio() {
        for (const symbol in this.portfolio) {
            if (this.portfolio[symbol] < 1) {
                delete this.portfolio[symbol];
            }
        }
        return this.portfolio;
    }
}

module.exports = StockPortfolio;