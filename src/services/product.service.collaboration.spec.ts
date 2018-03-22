import {TileComponent} from '../tile/tile.component';

require('should');
const td = require('testdouble');
const {replace, when, reset} = td;

describe('the product service', () => {
  afterEach(() => {
    reset();
  });

  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });

  // it(`collaborates with service.fetch`, () => {
  //   const ProductService = require('../services/product.service').ProductService;
  //   const service = new ProductService();
  //   replace(service, 'fetch');
  //
  //   const response = [{product: 'test'}];
  //
  //   when(service.fetch('/products.json')).thenResolve(response);
  //   const tile = new TileComponent(service);
  //
  //   return tile.fetch('/products.json').then((result) => {
  //     result.should.deepEqual(response);
  //   });
  // });
});

export {};
