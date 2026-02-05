const { sum } = require('./app.js');
const { fromEuroToDollar } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("3.5 euros should be converted to dollars correctly", function () {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;

    expect(dollars).toBeCloseTo(expected, 2);
});