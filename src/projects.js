import pandemicEssentials from './components/img/pandemic-essentials.png';
import secretApp from './components/img/secret-app.png';

const projectsArr = [
  {
    id: 1,
    title: 'Pandemic Essentials',
    image: pandemicEssentials,
    shortDesc:
      'An e-commerce site that offers products deemed essential during a national pandemic. Developed using Node.js, Express, Sequelize, React, Redux, Mocha, and Chai.',
    github: 'https://www.rb.gy/keatkh',
    website: 'https://pandemic-essentials.herokuapp.com/',
  },
  {
    id: 2,
    title: 'Keep It Secret',
    image: secretApp,
    shortDesc:
      'A web app that allows users to share secret messages with those they trust. Developed with AWS Lambda, Amazon DynamoDB, Amazon API Gateway, React, and Material UI.',
    github: 'https://www.rb.gy/fjdu9q',
    website: 'https://keepitsecret.netlify.app/#/',
  },
  // {
  //   id: 3,
  //   title: 'Capstone',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  //   shortDesc: 'Capstone project.',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  // },
];

export default projectsArr;
