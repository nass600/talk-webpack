import $ from 'jquery';

var AlbumProvider = (function () {
  var all = function () {
    return $.ajax({
      url: 'https://jsonplaceholder.typicode.com/albums'
    })
  };

  var findByUser = function (userId) {
    return $.ajax({
      url: 'https://jsonplaceholder.typicode.com/albums',
      data: {
        userId: userId
      }
    });
  };

  return {
    all: all,
    findByUser: findByUser
  }
})();

export default AlbumProvider;
