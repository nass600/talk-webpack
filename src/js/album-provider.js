import $ from 'jquery';

const AlbumProvider = {
  all: () => {
    return $.ajax({
      url: 'https://jsonplaceholder.typicode.com/albums'
    })
  },

  findByUser: (userId) => {
    return $.ajax({
      url: 'https://jsonplaceholder.typicode.com/albums',
      data: {
        userId: userId
      }
    });
  }
};

export default AlbumProvider;
