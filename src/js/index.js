import $ from 'jquery';
import UserProvider from './user-provider';
import AlbumProvider from './album-provider';

let renderUsers = ($target) => {
  let template = '<div class="col-6"><div class="card" data-user-id="{{id}}">' +
    '<div class="card-block">' +
    '<h4 class="card-title">{{name}}</h4>' +
    '<p class="card-text">{{email}}</p>' +
    '<button class="btn btn-primary btn-load-albums">Show albums</button>' +
    '<ul class="album-list"></ul>' +
    '</div>' +
    '</div></div>';

  UserProvider.all().then((data) => {
    data.map((user) => {
      let html = template.replace('{{name}}', user.name).replace('{{email}}', user.email).replace('{{id}}', user.id);
      $target.append(html);
    });
  });
};

let renderAlbums = (userId, $target) => {
  AlbumProvider.findByUser(userId).then((data) => {
    data.map((album) => {
      $target.find('.album-list').append('<li>' + album.title + '</li>');
    });
  });
};

$(() => {
  $('.container-fluid').on('click', '#load-users', () => {
    renderUsers($('#target-users'));
  }).on('click', '.btn-load-albums', function () {
    let id = $(this).closest('.card').data('userId');
    renderAlbums(id, $(this).closest('.card'));
  });
});
