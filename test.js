// const { sum } = require('./app.js');

const { fromDollarToYen, fromYenToPound } = require("./app.js");

test("Un dólar debería convertirse correctamente a yenes", function () {
    const yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;

    expect(yen).toBeCloseTo(expected, 2);
});

test("Un yen debería convertirse correctamente a libras", function () {
    const pounds = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87;

    expect(pounds).toBeCloseTo(expected, 4);
});
