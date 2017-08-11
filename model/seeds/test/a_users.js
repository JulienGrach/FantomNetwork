
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
          {
              id: 1,
              username: 'Julien',
              password: '123',
              mail: 'monMail1',
              profilPic: '/storage/images/test.jpg',
              coverPic: '/storage/images/test1.jpg',
              introduce : '',
              admin: true,
              activ: true
          },
          {
              id: 2,
              username: 'Jules',
              password: '123',
              mail: 'monMail2',
              profilPic: '/storage/images/test.jpg',
              coverPic: '/storage/images/test1.jpg',
              introduce : '',
          },
          {
              id: 3,
              username: 'Cynthia',
              password: '123',
              mail: 'monMail3',
              profilPic: '/storage/images/test.jpg',
              coverPic: '/storage/images/test1.jpg',
              introduce : '',
          },
          {
              id: 4,
              username: 'Tiphaine',
              password: '123',
              mail: 'monMail4',
              profilPic: '/storage/images/test.jpg',
              coverPic: '/storage/images/test1.jpg',
              introduce : '',
          },
          ]);
    });
};
