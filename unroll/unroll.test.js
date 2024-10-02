const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("works for 2x2 array", function () {
    const test_case = [
      [1, 2],
      [3, 4],
    ]
    const expecting = [1, 2, 4, 3]
    expect(unroll(test_case)).toEqual(expecting);
  });

  it("works for 3x3 array", function () {
    const test_case = [
      ['a', 'b', 'c'],
      ['j', 'e', 'f'],
      ['i', 'h', 'g'],
    ]
    const expecting = ['a', 'b', 'c', 'f', 'g', 'h', 'i', 'j', 'e'];
    expect(unroll(test_case)).toEqual(expecting);
  });

  it("works for 4x4 array", function () {
    const test_case = [
      [  1, 2, 3, 4 ],
      [  5, 6, 7, 8 ],
      [  9,10,11,12 ],
      [ 13,14,15,16 ],
    ];
    const expecting = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
    expect(unroll(test_case)).toEqual(expecting);
  });

});
