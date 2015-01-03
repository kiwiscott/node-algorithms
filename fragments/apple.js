/*
https://www.interviewcake.com/question/stock-price

Writing interview questions hasn't made me rich. Maybe trading apple stocks will.
I have an array stockPricesYesterday where:

The indices are the time, as a number of minutes past trade opening time, which was 9:30am local time.
The values are the price of apple stock at that time, in dollars.
For example, the stock cost $500 at 10:30am, so stockPricesYesterday[60] = 500.

Write an efficient algorithm for computing the best profit I could have made from 1 purchase 
and 1 sale of 1 apple stock yesterday. 

For this problem, we won't allow "shorting"—you must buy before you sell.

*/
var prices = stockPricesYesterday();

var buyTime = prices[0];
var sellTime = prices[0];
var positiveVariances = [];
var maxVariance = {
    variance: 0
};

for (var i = 0; i < prices.length; i++) {
    var currentValue = prices[i];

    if (buyTime.price > currentValue.price) {
        var favourableMarketCondition = {
            variance: sellTime.price - buyTime.price,
            buy: buyTime,
            sell: sellTime
        };
        if (favourableMarketCondition.variance > 0) {
            positiveVariances.push(favourableMarketCondition);

            if (maxVariance.variance < favourableMarketCondition.variance) {
                maxVariance = favourableMarketCondition;
            }
        }
        buyTime = currentValue;
        sellTime = currentValue;
    }
    else if (currentValue.price > sellTime.price) {
        sellTime = currentValue;
    }
}


if (positiveVariances.length == 0) {
    console.log('Yesterday sucked on the markets - you would only have lost money');
}
else {
    console.log('\n\n\nBuy\tSell\tProfit\tBuyTime\t\t\tSellTime');

    console.log('*Best Variance for the day*******************************************');
    writeVariance(maxVariance);

    console.log('\n*Other variances we could have traded********************************');

    for (var i = 0; i < positiveVariances.length; i++) {
        writeVariance(positiveVariances[i]);
    }

}
////////////////////////////////////////////////////////////
function writeVariance(pv) {
    console.log('$%d\t$%d\t$%d\t%s\t%s',
        pv.buy.price.toFixed(2),
        pv.sell.price.toFixed(2),
        pv.variance.toFixed(2),
        addMinutesToOpen(pv.buy.minutes),
        addMinutesToOpen(pv.sell.minutes)
    );
}

function addMinutesToOpen(mins) {
    var open = new Date(2015, 1, 2, 9, 30, 0, 0);
    open.setMinutes(open.getMinutes() + mins);
    return open.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}

function stockPricesYesterday() {
    var prices = [];
    var currentPrice = 62.21;

    for (var i = 0; i < 5000; i++) {
        currentPrice += getRandomChange();
        prices.push({
            minutes: i,
            price: currentPrice
        });
    }
    return prices;
}

function getRandomChange() {
    return (Math.random(1) * 100 % 2) > 1 ? Math.random(): -1 * Math.random();
}
