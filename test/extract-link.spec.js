let chai = require("chai");
let expect = chai.expect;
let textString = require("../lib/index");

describe("getLinksFromMd", () => {  
  it("Testa se existem links no arquivo e retorna vazio", () => {
    expect(textString("`#Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")).to.deep. equal("[]")
  });
  it("Testa se existem links no arquivo e retorna 3 links", () => {
    expect(textString("`#Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [foo](http://foo.com) Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;")).to.deep.equal([ { href: 'https://en.wiktionary.org/wiki/labore',
    text: 'labore' },
  { href: 'https://en.wiktionary.org/wiki/dolore',
    text: 'dolore' },
  { href: 'http://foo.com', text: 'foo' } ])
  });
  it("Testa se existem links no arquivo e retorna 1 link", () => {
    expect(textString("`#Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore).`;")).to.deep.equal([ { href: 'https://en.wiktionary.org/wiki/labore',
    text: 'labore' } ])
});
});
