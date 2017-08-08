
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
          {id: 1,
              title: 'Title1',
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur cupiditate dolores facilis fuga idincidunt iste nisi numquam obcaecati, quas quo quod, tempora temporibus veniam vero voluptate. Atque, eligendi.',
              userId:3
          },
          {id: 2,
              title: 'Title2',
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur cupiditate dolores facilis fuga idincidunt iste nisi numquam obcaecati, quas quo quod, tempora temporibus veniam vero voluptate. Atque, eligendi.',
              userId:1
          },
          {id: 3,
              title: 'Title3',
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur cupiditate dolores facilis fuga idincidunt iste nisi numquam obcaecati, quas quo quod, tempora temporibus veniam vero voluptate. Atque, eligendi.',
              userId:1
          },
          {id: 4,
              title: 'Title4,
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur cupiditate dolores facilis fuga idincidunt iste nisi numquam obcaecati, quas quo quod, tempora temporibus veniam vero voluptate. Atque, eligendi.',
              userId:2
          },
          {id: 5,
              title: 'Title5',
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur cupiditate dolores facilis fuga idincidunt iste nisi numquam obcaecati, quas quo quod, tempora temporibus veniam vero voluptate. Atque, eligendi.',
              userId:2
          },
          {id: 6,
              title: 'Title6',
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur cupiditate dolores facilis fuga idincidunt iste nisi numquam obcaecati, quas quo quod, tempora temporibus veniam vero voluptate. Atque, eligendi.',
              userId:2
          },
      ]);
    });
};
