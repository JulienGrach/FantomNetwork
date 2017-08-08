
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([

          {id: 1,
              articleId: 1,
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur cupiditate dolores facilis fuga idincidunt iste nisi numquam obcaecati, quas quo quod, tempora temporibus veniam vero voluptate. Atque, eligendi.',
              userId:1
          },
          {id: 2,
              articleId: 1,
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur cupiditate dolores facilis fuga idincidunt iste nisi numquam obcaecati, quas quo quod, tempora temporibus veniam vero voluptate. Atque, eligendi.',
              userId:1
          },
          {id: 3,
              articleId: 2,
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur cupiditate dolores facilis fuga idincidunt iste nisi numquam obcaecati, quas quo quod, tempora temporibus veniam vero voluptate. Atque, eligendi.',
              userId:2
          },
          {id: 4,
              articleId: 2,
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur cupiditate dolores facilis fuga idincidunt iste nisi numquam obcaecati, quas quo quod, tempora temporibus veniam vero voluptate. Atque, eligendi.',
              userId:2
          },
          {id: 5,
              articleId: 2,
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur cupiditate dolores facilis fuga idincidunt iste nisi numquam obcaecati, quas quo quod, tempora temporibus veniam vero voluptate. Atque, eligendi.',
              userId:2
          },
          {id: 6,
              articleId: 3,
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur cupiditate dolores facilis fuga idincidunt iste nisi numquam obcaecati, quas quo quod, tempora temporibus veniam vero voluptate. Atque, eligendi.',
              userId:4
          }
      ]);
    });
};
