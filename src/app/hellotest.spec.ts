
// npm install karma-firefox-launcher --save-dev --link
// karma config plugins require('karma-firefox-launcher'),
//fdescribe means run only this testing
//xdescribe means disalbe this test

describe('hellotest', () => {

  let expected = "";
  let notExpected = "";
  let expectMatch;

  beforeEach(()=>{
    expected = "hellotest";
    notExpected = "hellotest1";
    expectMatch = new RegExp(/^hello/);
  });

  afterEach(()=>{
    expected = "";
    notExpected = "";
    expectMatch = null;
  });

  it('hellotest is hellotest', () => expect('hellotest').toBe(expected));
  it('hellotest is not hellotest', () => expect('hellotest').not.toBe(notExpected));
  it('hellotest is equal to hellotest', () => expect('hellotest').toEqual(expected));
  it('hellotest is not equal to hellotest', () => expect('hellotest').not.toEqual(notExpected));
  it('hellotest is to start with hello', () => expect('hellotest').toMatch(expectMatch));
});
