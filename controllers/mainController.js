const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const messages = [
  {
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus perspiciatis voluptas tempore iure asperiores? Iusto unde adipisci numquam quod incidunt sit odio, consequatur cum. Dolorem odit officiis dolores eveniet eius.',
    userName: 'User1',
    date: dayjs('Wed, 15 Sep 2021 14:18:57 GMT').fromNow(),
  },
  {
    title: 'Lorem ipsum ',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus perspiciatis voluptas tempore iure asperiores? Iusto unde adipisci numquam quod incidunt sit odio.',
    userName: 'User2',
    date: dayjs('Wed, 15 Sep 2021 13:18:57 GMT').fromNow(),
  },
];

indexController_get = (req, res, next) => {
  res.render('index', { title: 'Main Page', messages });
};

newController_get = (req, res) => {
  res.render('new', { title: 'Create new message' });
};

newController_post = (req, res) => {
  const message = {
    title: req.body.title,
    description: req.body.description,
    userName: req.body.userName,
    date: dayjs().fromNow(),
  };
  messages.unshift(message);
  res.redirect('/');
};

module.exports = { indexController_get, newController_get, newController_post };
