var renderUsers = function ($target) {
  var template = '<div class="col-6"><div class="card" data-user-id="{{id}}">' +
    '<div class="card-block">' +
    '<h4 class="card-title">{{name}}</h4>' +
    '<p class="card-text">{{email}}</p>' +
    '<button class="btn btn-primary btn-load-albums">Show albums</button>' +
    '<ul class="album-list"></ul>' +
    '</div>' +
    '</div></div>';

  UserProvider.all().then(function (data) {
    data.map(function (user) {
      var html = template.replace('{{name}}', user.name).replace('{{email}}', user.email).replace('{{id}}', user.id);
      $target.append(html);
    });
  });
};

var renderAlbums = function (userId, $target) {
  AlbumProvider.findByUser(userId).then(function (data) {
    data.map(function (album) {
      $target.find('.album-list').append('<li>' + album.title + '</li>');
    });
  });
};


$(function () {
  $('.container-fluid').on('click', '#load-users', function () {
    renderUsers($('#target-users'));
  }).on('click', '.btn-load-albums', function () {
    var id = $(this).closest('.card').data('userId');
    renderAlbums(id, $(this).closest('.card'));
  });
});
