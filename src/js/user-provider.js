import $ from 'jquery';
import AlbumProvider from './album-provider'

var UserProvider = (function () {

  var all = function () {
    return $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users'
    });
  };

  var findOne = function (id) {
    var deferred = $.Deferred();

    var getUser = $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users/' + id
    });

    return $.when(AlbumProvider.findByUser(id), getUser).then(function (albumsResponse, userResponse) {
      var user = userResponse[0];
      user.albums = albumsResponse[0];

      return deferred.resolve(user);
    });
  };

  return {
    all: all,
    findOne: findOne
  }
})();

export default UserProvider;
