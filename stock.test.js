const StockPortfolio = require("./stock");

let portfolio = null;

test("create portfolio", () => {
    portfolio = new StockPortfolio();
    expect(portfolio.getPortfolio()).toEqual({});
});

test("is empty", () => {
    expect(portfolio.isEmpty()).toBe(true);
  });

test("purchase GME stock", () => {
    portfolio.purchaseStock("GME", 5); 
    expect(portfolio.getPortfolio()).toEqual({ GME: 5 });
});

test("purchase RBLX stock", () => {
    portfolio.purchaseStock("RBLX", 10); 
    expect(portfolio.getPortfolio()).toEqual({ GME: 5, RBLX: 10 });
});

test("count unique stocks", () => {
    count = portfolio.countUniqueStocks(); 
    expect(count).toBe(2);
});

test("Sell stock", () => {
    portfolio.sellStock("GME", 4);
    expect(portfolio.getPortfolio()).toEqual({ GME: 1, RBLX: 10 });
});

test("Current stocks", () => {
    total_shares = portfolio.currentStock("GME");
    expect(total_shares).toBe(1);
});

test("Update portfolio", () => {
    portfolio.sellStock("GME", 1);
    expect(portfolio.getPortfolio()).toEqual({ GME: 0, RBLX: 10 });
    portfolio.updatePortfolio();
    expect(portfolio.getPortfolio()).toEqual({ RBLX: 10 });
});

test("ShareSaleException", () => {
    expect(() => {
        portfolio.sellStock("RBLX", 11);
    }).toThrow("ShareSaleException");
});