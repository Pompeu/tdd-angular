'use strict';

describe('testes of localstorage module', function() {

  var service = null;
  beforeEach(module('localstorage'));

  beforeEach(inject(function(_localstorage_){
    service = _localstorage_;
  }));

  describe('should be have function set', function () {
    it('should be set function return a object', function () {
      var beer = {name : 'Skol' };
      var beerSaved = service.set('beers',beer);
      expect(beer).toEqual(beerSaved);
    });

    it('should be get function return a object', function () {
      var beer = {name : 'Skol' };
      var beerSaved = service.get('beers');
      expect(beer).toEqual(beerSaved);
    });

    it('should be put function return a updated object', function () {
      var newBeer = {name : 'Skol Beats' };
      var beerSaved = service.put('beers', newBeer);
      expect(newBeer).toEqual(beerSaved);
    });

    it('should be del function remove a object', function () {
      var isRemoved = service.del('beers');
      expect(true).toEqual(isRemoved);
    });
  });
});
