const db = require('./server/db');
// const projectimg = require('./src/components/projectimg.png');
const Project = require('./server/db/projects');

const projects = [
  {
    id: 1,
    title: 'Grace Shopper',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    shortDesc: 'An e-commerce site built using React.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    title: 'Stackathon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    shortDesc: 'A stackathon app.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    title: 'Capstone',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    shortDesc: 'Capstone project built using NERDS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      projects.map((project) => {
        return Project.create(project);
      })
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!');
      db.close();
    })
    .catch((err) => {
      console.error('Something went wrong while seeding.');
      console.error(err);
      db.close();
    });
}
