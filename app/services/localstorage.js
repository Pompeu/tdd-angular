(function() {
  angular.module('localstorage',[])
  .factory('localstorage', localstorage);

  localstorage.$inject = ['$window'];

  function localstorage ($window) {
    var service = {
      set : set,
      get : get,
      put : put,
      del : del
    };

    return service;

    function set (key, value) {
      $window.localStorage.setItem(key, JSON.stringify(value));
      var result = get(key);
      return result;
    }

    function get (key) {
      var result = $window.localStorage.getItem(key);
      return JSON.parse(result);
    }

    function put (key, value) {
      del(key);
      return set(key, value);
    }

    function del (key) {
      $window.localStorage.removeItem(key);
      return get(key)? false : true;
    }
  }

}());
