import $ from 'jquery';
import AlbumProvider from './album-provider'

const UserProvider = {
  all: () => {
    return $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users'
    });
  },

  findOne: (id) => {
    let deferred = $.Deferred();

    let getUser = $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users/' + id
    });

    return $.when(AlbumProvider.findByUser(id), getUser).then((albumsResponse, userResponse) => {
      let user = userResponse[0];
      user.albums = albumsResponse[0];

      return deferred.resolve(user);
    });
  }
};

export default UserProvider;
