function getSum(prices, discount) {
    let total = prices.reduce((sum, price) => sum + price, 0);
    let discountAmount = total * (discount / 100);
    let discountedTotal = total - discountAmount;
    return Math.round(discountedTotal);
}

console.log(getSum([100, 200, 300], 30)) // 420 
console.log(getSum([150, 250, 150], 10)) // 495 
console.log(getSum([1000], 50)) // 500 