const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const messages = [
  {
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus perspiciatis voluptas tempore iure asperiores? Iusto unde adipisci numquam quod incidunt sit odio, consequatur cum. Dolorem odit officiis dolores eveniet eius.',
    userName: 'User1',
    date: dayjs().fromNow(),
  },
  {
    title: 'Lorem ipsum ',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus perspiciatis voluptas tempore iure asperiores? Iusto unde adipisci numquam quod incidunt sit odio.',
    userName: 'User2',
    date: '5 hours ago',
  },
];

indexController_get = (req, res, next) => {
  res.render('index', { title: 'Main Page', messages });
};

module.exports = { indexController_get };
