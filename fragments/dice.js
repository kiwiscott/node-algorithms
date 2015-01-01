var sides = 6;
var dist = [];
dist[0] = 0;

var count = 0;
for (var i = 1; i <= sides; i++) {
    for (var j = 1; j <= sides; j++) {
        var roll = i + j;
        dist[roll - 1] = dist[roll - 1] + 1 || 1;
    }
}

var totalRolls = process.argv[2] || 100000000;
var rolls = [];
for (var i = 0; i < totalRolls; i++) {
    var dice1 = Math.round(Math.random() * 100000000) % 6 + 1;
    var dice2 = Math.round(Math.random() * 100000000) % 6 + 1;
    var roll = dice1 + dice2;
    rolls[roll - 1] = rolls[roll - 1] + 1 || 1;
}

console.log('Total Rolls:' + totalRolls)

for (var i = 1; i < dist.length; i++) {
    var expected = dist[i] / 36.0;
    var actual = rolls[i] / totalRolls;

    console.log((i + 1) + '\texpected:' + expected.toFixed(3) + '\tactual:' + actual.toFixed(3) + '\tdiff:' + (expected - actual).toFixed(3));
}
